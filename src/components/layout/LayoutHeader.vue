<script setup lang="ts">
import UiIcon from '@/components/UiIcon.vue'
import { IconName } from '@/enums/IconName.ts'
import { ref, unref } from 'vue'

const isProfileMenuOpen = ref(false)

function toggleProfileMenu() {
  isProfileMenuOpen.value = !unref(isProfileMenuOpen)
}
</script>

<template>
  <header class="z-10 py-4 bg-white shadow-md">
    <div class="container flex items-center justify-between h-full px-6 mx-auto text-purple-600">
      <div class="ml-auto">
        <button
          class="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
          aria-label="Account"
          aria-haspopup="true"
          @click="toggleProfileMenu"
        >
          <img
            class="object-cover w-8 h-8 rounded-full"
            src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
            alt=""
            aria-hidden="true"
          >
        </button>

        <div
          v-if="isProfileMenuOpen"
          class="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md"
        >
          <a
            class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800"
            href="#"
          >
            <UiIcon :name="IconName.LOGOUT" />
            <span>Log out</span>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
