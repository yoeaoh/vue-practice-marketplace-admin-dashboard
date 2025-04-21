<script setup lang="ts">
import UiIcon from '@/components/UiIcon.vue'
import { IconName } from '@/enums/IconName.ts'
</script>

<template>
  <header class="z-10 py-4 bg-white shadow-md">
    <div class="container flex items-center justify-between h-full px-6 mx-auto text-purple-600">
      <!-- Search input -->
      <div class="flex justify-center flex-1 max-w-xl">
        <div class="relative w-full focus-within:text-purple-500">
          <div class="absolute inset-y-0 flex items-center pl-2">
            <UiIcon
              :name="IconName.SEARCH"
              :size="14"
            />
          </div>

          <input
            class="w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
            type="text"
            placeholder="Search for projects"
            aria-label="Search"
          >
        </div>
      </div>

      <ul class="flex items-center flex-shrink-0 space-x-6">
        <!-- Notifications menu -->
        <li class="relative">
          <button
            class="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
            aria-label="Notifications"
            aria-haspopup="true"
            @click="toggleNotificationsMenu"
          >
            <UiIcon :name="IconName.NOTIFICATION" />
            <!-- Notification badge -->
            <span
              aria-hidden="true"
              class="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full"
            />
          </button>

          <div
            v-if="isNotificationsMenuOpen"
            class="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md"
          >
            <a
              class="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800"
              href="#"
            >
              <span>New order received</span>
              <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full">New</span>
            </a>
            <a
              class="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800"
              href="#"
            >
              <span>Low stock alert</span>
              <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full">3</span>
            </a>
            <a
              class="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800"
              href="#"
            >
              <span>New user registered</span>
            </a>
          </div>
        </li>

        <!-- Profile menu -->
        <li class="relative">
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
              <UiIcon :name="IconName.PROFILE" />
              <span>Profile</span>
            </a>

            <a
              class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800"
              href="#"
            >
              <UiIcon :name="IconName.SETTINGS" />
              <span>Settings</span>
            </a>

            <a
              class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800"
              href="#"
            >
              <UiIcon :name="IconName.LOGOUT" />
              <span>Log out</span>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </header>
</template>
