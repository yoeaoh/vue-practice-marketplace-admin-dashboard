<script setup lang="ts">
import UiIcon from '@/components/UiIcon.vue'
import { IconName } from '@/enums/IconName.ts'
import { reactive, ref } from 'vue'

// Form state
const form = reactive({
  username: '',
  password: '',
  rememberMe: false,
})

// Form validation errors
const errors = reactive({
  username: '',
  password: '',
})

// UI state
const showPassword = ref(false)
const isLoading = ref(false)

// Form submission handler
async function handleLogin() {
  // Reset errors
  errors.username = ''
  errors.password = ''

  // Validate form
  let isValid = true

  if (!form.username.trim()) {
    errors.username = 'Username is required'
    isValid = false
  }

  if (!form.password) {
    errors.password = 'Password is required'
    isValid = false
  }
  else if (form.password.length < 6) {
    errors.password = 'Password must be at least 6 characters'
    isValid = false
  }

  if (!isValid)
    return

  // Simulate API call
  try {
    isLoading.value = true

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500))

    // In a real application, you would make an API call here
    console.warn('Login submitted:', {
      username: form.username,
      password: form.password,
      rememberMe: form.rememberMe,
    })

    // Reset form
    form.username = ''
    form.password = ''
    form.rememberMe = false
  }
  catch (error) {
    console.error('Login failed:', error)
  }
  finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 mb-2">
          MarketAdmin
        </h2>
        <p class="text-gray-600">
          Sign in to your account
        </p>
      </div>

      <div class="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form
          class="space-y-6"
          @submit.prevent="handleLogin"
        >
          <div>
            <label
              for="username"
              class="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <UiIcon
                  :name="IconName.USER"
                  class="h-5 w-5"
                />
              </div>
              <input
                id="username"
                v-model="form.username"
                name="username"
                type="text"
                autocomplete="username"
                required
                class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                :class="{ 'border-red-500': errors.username }"
                placeholder="Enter your username"
              >
            </div>
            <p
              v-if="errors.username"
              class="mt-2 text-sm text-red-600"
            >
              {{ errors.username }}
            </p>
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <UiIcon
                  :name="IconName.LOCK"
                  class="h-5 w-5"
                />
              </div>
              <input
                id="password"
                v-model="form.password"
                name="password"
                :type="showPassword ? 'text' : 'password'"
                autocomplete="current-password"
                required
                class="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                :class="{ 'border-red-500': errors.password }"
                placeholder="Enter your password"
              >
              <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button
                  type="button"
                  class="text-gray-400 hover:text-gray-500 focus:outline-none"
                  @click="showPassword = !showPassword"
                >
                  <UiIcon
                    :name="showPassword ? IconName.EYE_OFF : IconName.EYE"
                    class="h-5 w-5"
                  />
                </button>
              </div>
            </div>
            <p
              v-if="errors.password"
              class="mt-2 text-sm text-red-600"
            >
              {{ errors.password }}
            </p>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                v-model="form.rememberMe"
                name="remember-me"
                type="checkbox"
                class="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              >
              <label
                for="remember-me"
                class="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div class="text-sm">
              <a
                href="#"
                class="font-medium text-purple-600 hover:text-purple-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              :disabled="isLoading"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span
                v-if="isLoading"
                class="mr-2"
              >
                <UiIcon
                  :name="IconName.LOADING"
                  class="animate-spin h-4 w-4 text-white"
                />
              </span>
              {{ isLoading ? 'Signing in...' : 'Sign in' }}
            </button>
          </div>
        </form>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-2 gap-3">
            <div>
              <a
                href="#"
                class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span class="sr-only">Sign in with Google</span>
                <UiIcon
                  class="w-5 h-5"
                  :name="IconName.GOOGLE"
                />
              </a>
            </div>

            <div>
              <a
                href="#"
                class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span class="sr-only">Sign in with Microsoft</span>
                <UiIcon
                  class="w-5 h-5"
                  :name="IconName.MICROSOFT"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <p class="text-center text-sm text-gray-600">
        Don't have an account?
        <a
          href="#"
          class="font-medium text-purple-600 hover:text-purple-500"
        >
          Sign up
        </a>
      </p>
    </div>
  </div>
</template>
