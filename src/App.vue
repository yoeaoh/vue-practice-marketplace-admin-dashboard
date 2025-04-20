<script setup>
import { ref } from 'vue'

// State management
const activeTab = ref('dashboard')
const isNotificationsMenuOpen = ref(false)
const isProfileMenuOpen = ref(false)

// Toggle functions
function toggleNotificationsMenu() {
  isNotificationsMenuOpen.value = !isNotificationsMenuOpen.value
  isProfileMenuOpen.value = false
}

function toggleProfileMenu() {
  isProfileMenuOpen.value = !isProfileMenuOpen.value
  isNotificationsMenuOpen.value = false
}
</script>

<template>
  <div class="flex h-screen bg-gray-50">
    <!-- Sidebar -->
    <aside class="z-20 w-64 overflow-y-auto bg-white flex-shrink-0">
      <div class="py-4 text-gray-500">
        <a
          href="#"
          class="ml-6 text-lg font-bold text-gray-800"
        >
          MarketAdmin
        </a>
        <ul class="mt-6">
          <li class="relative px-6 py-3">
            <span
              v-if="activeTab === 'dashboard'"
              class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
              aria-hidden="true"
            />
            <a
              href="#"
              class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
              :class="{ 'text-gray-800': activeTab === 'dashboard' }"
              @click.prevent="activeTab = 'dashboard'"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ><rect
                width="7"
                height="9"
                x="3"
                y="3"
                rx="1"
              /><rect
                width="7"
                height="5"
                x="14"
                y="3"
                rx="1"
              /><rect
                width="7"
                height="9"
                x="14"
                y="12"
                rx="1"
              /><rect
                width="7"
                height="5"
                x="3"
                y="16"
                rx="1"
              /></svg>
              <span class="ml-4">Dashboard</span>
            </a>
          </li>
          <li class="relative px-6 py-3">
            <span
              v-if="activeTab === 'products'"
              class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
              aria-hidden="true"
            />
            <a
              href="#"
              class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
              :class="{ 'text-gray-800': activeTab === 'products' }"
              @click.prevent="activeTab = 'products'"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
              <span class="ml-4">Products</span>
            </a>
          </li>
          <li class="relative px-6 py-3">
            <span
              v-if="activeTab === 'orders'"
              class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
              aria-hidden="true"
            />
            <a
              href="#"
              class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
              :class="{ 'text-gray-800': activeTab === 'orders' }"
              @click.prevent="activeTab = 'orders'"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ><circle
                cx="8"
                cy="21"
                r="1"
              /><circle
                cx="19"
                cy="21"
                r="1"
              /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
              <span class="ml-4">Orders</span>
            </a>
          </li>
          <li class="relative px-6 py-3">
            <span
              v-if="activeTab === 'users'"
              class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
              aria-hidden="true"
            />
            <a
              href="#"
              class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
              :class="{ 'text-gray-800': activeTab === 'users' }"
              @click.prevent="activeTab = 'users'"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle
                cx="9"
                cy="7"
                r="4"
              /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              <span class="ml-4">Users</span>
            </a>
          </li>
          <li class="relative px-6 py-3">
            <span
              v-if="activeTab === 'blog'"
              class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
              aria-hidden="true"
            />
            <a
              href="#"
              class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
              :class="{ 'text-gray-800': activeTab === 'blog' }"
              @click.prevent="activeTab = 'blog'"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" /><path d="M18 14h-8" /><path d="M15 18h-5" /><path d="M10 6h8v4h-8V6Z" /></svg>
              <span class="ml-4">Blog Posts</span>
            </a>
          </li>
        </ul>
        <div class="px-6 my-6">
          <button class="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
            Create account
            <span
              class="ml-2"
              aria-hidden="true"
            >+</span>
          </button>
        </div>
      </div>
    </aside>

    <div class="flex flex-col flex-1 w-full">
      <!-- Header -->
      <header class="z-10 py-4 bg-white shadow-md">
        <div class="container flex items-center justify-between h-full px-6 mx-auto text-purple-600">
          <!-- Search input -->
          <div class="flex justify-center flex-1 max-w-xl">
            <div class="relative w-full focus-within:text-purple-500">
              <div class="absolute inset-y-0 flex items-center pl-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span>Profile</span>
                </a>
                <a
                  class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Settings</span>
                </a>
                <a
                  class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  <span>Log out</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </header>

      <!-- Main content -->
      <main class="h-full overflow-y-auto">
        <div class="container px-6 mx-auto grid">
          <!-- Dashboard -->
          <div v-if="activeTab === 'dashboard'">
            <h2 class="my-6 text-2xl font-semibold text-gray-700">
              Dashboard
            </h2>

            <!-- Cards -->
            <div class="grid gap-6 mb-8 grid-cols-4">
              <!-- Card -->
              <div class="flex items-center p-4 bg-white rounded-lg shadow-xs">
                <div class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>
                </div>
                <div>
                  <p class="mb-2 text-sm font-medium text-gray-600">
                    Total Revenue
                  </p>
                  <p class="text-lg font-semibold text-gray-700">
                    $87,432.90
                  </p>
                </div>
              </div>
              <!-- Card -->
              <div class="flex items-center p-4 bg-white rounded-lg shadow-xs">
                <div class="p-3 mr-4 text-green-500 bg-green-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ><circle
                    cx="8"
                    cy="21"
                    r="1"
                  /><circle
                    cx="19"
                    cy="21"
                    r="1"
                  /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
                </div>
                <div>
                  <p class="mb-2 text-sm font-medium text-gray-600">
                    New Orders
                  </p>
                  <p class="text-lg font-semibold text-gray-700">
                    376
                  </p>
                </div>
              </div>
              <!-- Card -->
              <div class="flex items-center p-4 bg-white rounded-lg shadow-xs">
                <div class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle
                    cx="9"
                    cy="7"
                    r="4"
                  /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                </div>
                <div>
                  <p class="mb-2 text-sm font-medium text-gray-600">
                    New Customers
                  </p>
                  <p class="text-lg font-semibold text-gray-700">
                    45
                  </p>
                </div>
              </div>
              <!-- Card -->
              <div class="flex items-center p-4 bg-white rounded-lg shadow-xs">
                <div class="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                </div>
                <div>
                  <p class="mb-2 text-sm font-medium text-gray-600">
                    Inventory
                  </p>
                  <p class="text-lg font-semibold text-gray-700">
                    1,257
                  </p>
                </div>
              </div>
            </div>

            <!-- Charts -->
            <div class="grid gap-6 mb-8 grid-cols-2">
              <div class="min-w-0 p-4 bg-white rounded-lg shadow-xs">
                <h4 class="mb-4 font-semibold text-gray-800">
                  Revenue
                </h4>
                <div class="relative h-56">
                  <div class="absolute inset-0 flex items-center justify-center text-gray-500">
                    <p>Revenue Chart (Placeholder)</p>
                  </div>
                </div>
              </div>
              <div class="min-w-0 p-4 bg-white rounded-lg shadow-xs">
                <h4 class="mb-4 font-semibold text-gray-800">
                  Traffic
                </h4>
                <div class="relative h-56">
                  <div class="absolute inset-0 flex items-center justify-center text-gray-500">
                    <p>Traffic Chart (Placeholder)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Products -->
          <div v-if="activeTab === 'products'">
            <h2 class="my-6 text-2xl font-semibold text-gray-700">
              Products
            </h2>

            <!-- CTA -->
            <div class="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                <span>Manage your products inventory</span>
              </div>
              <button class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-800 border border-transparent rounded-lg active:bg-purple-900 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                Add product
              </button>
            </div>

            <!-- Table -->
            <div class="w-full overflow-hidden rounded-lg shadow-xs">
              <div class="w-full overflow-x-auto">
                <table class="w-full whitespace-no-wrap">
                  <thead>
                    <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
                      <th class="px-4 py-3">
                        Product
                      </th>
                      <th class="px-4 py-3">
                        Status
                      </th>
                      <th class="px-4 py-3">
                        Inventory
                      </th>
                      <th class="px-4 py-3">
                        Vendor
                      </th>
                      <th class="px-4 py-3">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y">
                    <tr class="text-gray-700">
                      <td class="px-4 py-3">
                        <div class="flex items-center text-sm">
                          <div class="relative w-8 h-8 mr-3 rounded-full">
                            <img
                              class="object-cover w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&facepad=3&fit=facearea&s=707b9c33066bf8808c934c8ab394dff6"
                              alt=""
                              loading="lazy"
                            >
                            <div
                              class="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <p class="font-semibold">
                              Premium Headphones
                            </p>
                            <p class="text-xs text-gray-600">
                              Electronics
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-4 py-3 text-xs">
                        <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full">
                          Active
                        </span>
                      </td>
                      <td class="px-4 py-3 text-sm">
                        142 in stock
                      </td>
                      <td class="px-4 py-3 text-sm">
                        AudioTech Inc.
                      </td>
                      <td class="px-4 py-3">
                        <div class="flex items-center space-x-4 text-sm">
                          <button
                            class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
                            aria-label="Edit"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
                          </button>
                          <button
                            class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
                            aria-label="Delete"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line
                              x1="10"
                              x2="10"
                              y1="11"
                              y2="17"
                            /><line
                              x1="14"
                              x2="14"
                              y1="11"
                              y2="17"
                            /></svg>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr class="text-gray-700">
                      <td class="px-4 py-3">
                        <div class="flex items-center text-sm">
                          <div class="relative w-8 h-8 mr-3 rounded-full">
                            <img
                              class="object-cover w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                              alt=""
                              loading="lazy"
                            >
                            <div
                              class="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <p class="font-semibold">
                              Smart Watch
                            </p>
                            <p class="text-xs text-gray-600">
                              Wearables
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-4 py-3 text-xs">
                        <span class="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full">
                          Low Stock
                        </span>
                      </td>
                      <td class="px-4 py-3 text-sm">
                        12 in stock
                      </td>
                      <td class="px-4 py-3 text-sm">
                        TechGear Co.
                      </td>
                      <td class="px-4 py-3">
                        <div class="flex items-center space-x-4 text-sm">
                          <button
                            class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
                            aria-label="Edit"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
                          </button>
                          <button
                            class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
                            aria-label="Delete"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line
                              x1="10"
                              x2="10"
                              y1="11"
                              y2="17"
                            /><line
                              x1="14"
                              x2="14"
                              y1="11"
                              y2="17"
                            /></svg>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr class="text-gray-700">
                      <td class="px-4 py-3">
                        <div class="flex items-center text-sm">
                          <div class="relative w-8 h-8 mr-3 rounded-full">
                            <img
                              class="object-cover w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1546456073-6712f79251bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                              alt=""
                              loading="lazy"
                            >
                            <div
                              class="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <p class="font-semibold">
                              Ergonomic Chair
                            </p>
                            <p class="text-xs text-gray-600">
                              Furniture
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-4 py-3 text-xs">
                        <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full">
                          Active
                        </span>
                      </td>
                      <td class="px-4 py-3 text-sm">
                        89 in stock
                      </td>
                      <td class="px-4 py-3 text-sm">
                        ComfortZone Ltd.
                      </td>
                      <td class="px-4 py-3">
                        <div class="flex items-center space-x-4 text-sm">
                          <button
                            class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
                            aria-label="Edit"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
                          </button>
                          <button
                            class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
                            aria-label="Delete"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line
                              x1="10"
                              x2="10"
                              y1="11"
                              y2="17"
                            /><line
                              x1="14"
                              x2="14"
                              y1="11"
                              y2="17"
                            /></svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- Orders -->
          <div v-if="activeTab === 'orders'">
            <h2 class="my-6 text-2xl font-semibold text-gray-700">
              Orders
            </h2>

            <!-- Filters -->
            <div class="flex justify-between mb-8">
              <div class="flex space-x-4">
                <button class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                  All Orders
                </button>
                <button class="px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition-colors duration-150 bg-white border border-gray-300 rounded-lg active:bg-gray-100 hover:bg-gray-100 focus:outline-none focus:shadow-outline-gray">
                  Pending
                </button>
                <button class="px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition-colors duration-150 bg-white border border-gray-300 rounded-lg active:bg-gray-100 hover:bg-gray-100 focus:outline-none focus:shadow-outline-gray">
                  Shipped
                </button>
                <button class="px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition-colors duration-150 bg-white border border-gray-300 rounded-lg active:bg-gray-100 hover:bg-gray-100 focus:outline-none focus:shadow-outline-gray">
                  Delivered
                </button>
              </div>
              <div>
                <button class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                  Export Orders
                </button>
              </div>
            </div>

            <!-- Table -->
            <div class="w-full overflow-hidden rounded-lg shadow-xs">
              <div class="w-full overflow-x-auto">
                <table class="w-full whitespace-no-wrap">
                  <thead>
                    <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
                      <th class="px-4 py-3">
                        Order ID
                      </th>
                      <th class="px-4 py-3">
                        Customer
                      </th>
                      <th class="px-4 py-3">
                        Date
                      </th>
                      <th class="px-4 py-3">
                        Amount
                      </th>
                      <th class="px-4 py-3">
                        Status
                      </th>
                      <th class="px-4 py-3">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y">
                    <tr class="text-gray-700">
                      <td class="px-4 py-3 text-sm">
                        #ORD-001234
                      </td>
                      <td class="px-4 py-3">
                        <div class="flex items-center text-sm">
                          <div class="relative w-8 h-8 mr-3 rounded-full">
                            <img
                              class="object-cover w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&facepad=3&fit=facearea&s=707b9c33066bf8808c934c8ab394dff6"
                              alt=""
                              loading="lazy"
                            >
                            <div
                              class="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <p class="font-semibold">
                              Sarah Johnson
                            </p>
                            <p class="text-xs text-gray-600">
                              sarah.j@example.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-4 py-3 text-sm">
                        April 10, 2023
                      </td>
                      <td class="px-4 py-3 text-sm">
                        $259.99
                      </td>
                      <td class="px-4 py-3 text-xs">
                        <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full">
                          Delivered
                        </span>
                      </td>
                      <td class="px-4 py-3">
                        <div class="flex items-center space-x-4 text-sm">
                          <button
                            class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
                            aria-label="View"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle
                              cx="12"
                              cy="12"
                              r="3"
                            /></svg>
                          </button>
                          <button
                            class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
                            aria-label="Edit"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr class="text-gray-700">
                      <td class="px-4 py-3 text-sm">
                        #ORD-001233
                      </td>
                      <td class="px-4 py-3">
                        <div class="flex items-center text-sm">
                          <div class="relative w-8 h-8 mr-3 rounded-full">
                            <img
                              class="object-cover w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                              alt=""
                              loading="lazy"
                            >
                            <div
                              class="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <p class="font-semibold">
                              Michael Roberts
                            </p>
                            <p class="text-xs text-gray-600">
                              m.roberts@example.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-4 py-3 text-sm">
                        April 9, 2023
                      </td>
                      <td class="px-4 py-3 text-sm">
                        $129.50
                      </td>
                      <td class="px-4 py-3 text-xs">
                        <span class="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full">
                          Shipped
                        </span>
                      </td>
                      <td class="px-4 py-3">
                        <div class="flex items-center space-x-4 text-sm">
                          <button
                            class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
                            aria-label="View"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle
                              cx="12"
                              cy="12"
                              r="3"
                            /></svg>
                          </button>
                          <button
                            class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
                            aria-label="Edit"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr class="text-gray-700">
                      <td class="px-4 py-3 text-sm">
                        #ORD-001232
                      </td>
                      <td class="px-4 py-3">
                        <div class="flex items-center text-sm">
                          <div class="relative w-8 h-8 mr-3 rounded-full">
                            <img
                              class="object-cover w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                              alt=""
                              loading="lazy"
                            >
                            <div
                              class="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <p class="font-semibold">
                              Emily Chen
                            </p>
                            <p class="text-xs text-gray-600">
                              e.chen@example.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-4 py-3 text-sm">
                        April 8, 2023
                      </td>
                      <td class="px-4 py-3 text-sm">
                        $89.99
                      </td>
                      <td class="px-4 py-3 text-xs">
                        <span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full">
                          Pending
                        </span>
                      </td>
                      <td class="px-4 py-3">
                        <div class="flex items-center space-x-4 text-sm">
                          <button
                            class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
                            aria-label="View"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle
                              cx="12"
                              cy="12"
                              r="3"
                            /></svg>
                          </button>
                          <button
                            class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
                            aria-label="Edit"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t bg-gray-50 grid-cols-9">
                <span class="flex items-center col-span-3">
                  Showing 1-3 of 100
                </span>
                <span class="col-span-2" />
                <!-- Pagination -->
                <span class="flex col-span-4 justify-end">
                  <nav aria-label="Table navigation">
                    <ul class="inline-flex items-center">
                      <li>
                        <button
                          class="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                          aria-label="Previous"
                        >
                          <svg
                            class="w-4 h-4 fill-current"
                            aria-hidden="true"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                              fill-rule="evenodd"
                            />
                          </svg>
                        </button>
                      </li>
                      <li>
                        <button class="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple">
                          1
                        </button>
                      </li>
                      <li>
                        <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                          2
                        </button>
                      </li>
                      <li>
                        <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                          3
                        </button>
                      </li>
                      <li>
                        <button
                          class="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                          aria-label="Next"
                        >
                          <svg
                            class="w-4 h-4 fill-current"
                            aria-hidden="true"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"
                              fill-rule="evenodd"
                            />
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </span>
              </div>
            </div>
          </div>

          <!-- Users -->
          <div v-if="activeTab === 'users'">
            <h2 class="my-6 text-2xl font-semibold text-gray-700">
              Users
            </h2>

            <!-- CTA -->
            <div class="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle
                  cx="9"
                  cy="7"
                  r="4"
                /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                <span>Manage your users and permissions</span>
              </div>
              <button class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-800 border border-transparent rounded-lg active:bg-purple-900 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                Add user
              </button>
            </div>

            <!-- Table -->
            <div class="w-full overflow-hidden rounded-lg shadow-xs">
              <div class="w-full overflow-x-auto">
                <table class="w-full whitespace-no-wrap">
                  <thead>
                    <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
                      <th class="px-4 py-3">
                        User
                      </th>
                      <th class="px-4 py-3">
                        Role
                      </th>
                      <th class="px-4 py-3">
                        Status
                      </th>
                      <th class="px-4 py-3">
                        Joined
                      </th>
                      <th class="px-4 py-3">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y">
                    <tr class="text-gray-700">
                      <td class="px-4 py-3">
                        <div class="flex items-center text-sm">
                          <div class="relative w-8 h-8 mr-3 rounded-full">
                            <img
                              class="object-cover w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&facepad=3&fit=facearea&s=707b9c33066bf8808c934c8ab394dff6"
                              alt=""
                              loading="lazy"
                            >
                            <div
                              class="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <p class="font-semibold">
                              Sarah Johnson
                            </p>
                            <p class="text-xs text-gray-600">
                              sarah.j@example.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-4 py-3 text-sm">
                        Admin
                      </td>
                      <td class="px-4 py-3 text-xs">
                        <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full">
                          Active
                        </span>
                      </td>
                      <td class="px-4 py-3 text-sm">
                        January 15, 2022
                      </td>
                      <td class="px-4 py-3">
                        <div class="flex items-center space-x-4 text-sm">
                          <button
                            class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
                            aria-label="Edit"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
                          </button>
                          <button
                            class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
                            aria-label="Delete"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line
                              x1="10"
                              x2="10"
                              y1="11"
                              y2="17"
                            /><line
                              x1="14"
                              x2="14"
                              y1="11"
                              y2="17"
                            /></svg>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr class="text-gray-700">
                      <td class="px-4 py-3">
                        <div class="flex items-center text-sm">
                          <div class="relative w-8 h-8 mr-3 rounded-full">
                            <img
                              class="object-cover w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                              alt=""
                              loading="lazy"
                            >
                            <div
                              class="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <p class="font-semibold">
                              Michael Roberts
                            </p>
                            <p class="text-xs text-gray-600">
                              m.roberts@example.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-4 py-3 text-sm">
                        Editor
                      </td>
                      <td class="px-4 py-3 text-xs">
                        <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full">
                          Active
                        </span>
                      </td>
                      <td class="px-4 py-3 text-sm">
                        March 10, 2022
                      </td>
                      <td class="px-4 py-3">
                        <div class="flex items-center space-x-4 text-sm">
                          <button
                            class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
                            aria-label="Edit"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
                          </button>
                          <button
                            class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
                            aria-label="Delete"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line
                              x1="10"
                              x2="10"
                              y1="11"
                              y2="17"
                            /><line
                              x1="14"
                              x2="14"
                              y1="11"
                              y2="17"
                            /></svg>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr class="text-gray-700">
                      <td class="px-4 py-3">
                        <div class="flex items-center text-sm">
                          <div class="relative w-8 h-8 mr-3 rounded-full">
                            <img
                              class="object-cover w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                              alt=""
                              loading="lazy"
                            >
                            <div
                              class="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <p class="font-semibold">
                              Emily Chen
                            </p>
                            <p class="text-xs text-gray-600">
                              e.chen@example.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-4 py-3 text-sm">
                        Customer
                      </td>
                      <td class="px-4 py-3 text-xs">
                        <span class="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full">
                          Suspended
                        </span>
                      </td>
                      <td class="px-4 py-3 text-sm">
                        April 8, 2023
                      </td>
                      <td class="px-4 py-3">
                        <div class="flex items-center space-x-4 text-sm">
                          <button
                            class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
                            aria-label="Edit"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
                          </button>
                          <button
                            class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
                            aria-label="Delete"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line
                              x1="10"
                              x2="10"
                              y1="11"
                              y2="17"
                            /><line
                              x1="14"
                              x2="14"
                              y1="11"
                              y2="17"
                            /></svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- Blog Posts -->
          <div v-if="activeTab === 'blog'">
            <h2 class="my-6 text-2xl font-semibold text-gray-700">
              Blog Posts
            </h2>

            <!-- CTA -->
            <div class="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" /><path d="M18 14h-8" /><path d="M15 18h-5" /><path d="M10 6h8v4h-8V6Z" /></svg>
                <span>Manage your blog content</span>
              </div>
              <button class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-800 border border-transparent rounded-lg active:bg-purple-900 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                Create post
              </button>
            </div>

            <!-- Blog post cards -->
            <div class="grid gap-6 mb-8 grid-cols-3">
              <!-- Blog post card -->
              <div class="overflow-hidden bg-white rounded-lg shadow-xs">
                <img
                  class="object-cover w-full h-48"
                  src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Blog post image"
                >
                <div class="p-4">
                  <h4 class="mb-2 text-lg font-semibold text-gray-700">
                    10 Tips for E-commerce Success
                  </h4>
                  <p class="text-sm text-gray-600">
                    Learn the top strategies for growing your online store and increasing sales...
                  </p>
                  <div class="flex items-center justify-between mt-4">
                    <span class="text-xs text-gray-500">April 10, 2023</span>
                    <div class="flex items-center space-x-2">
                      <span class="px-2 py-1 text-xs font-semibold leading-tight text-green-700 bg-green-100 rounded-full">
                        Published
                      </span>
                      <button
                        class="p-1 text-sm font-medium leading-5 text-purple-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
                        aria-label="Edit"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Blog post card -->
              <div class="overflow-hidden bg-white rounded-lg shadow-xs">
                <img
                  class="object-cover w-full h-48"
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Blog post image"
                >
                <div class="p-4">
                  <h4 class="mb-2 text-lg font-semibold text-gray-700">
                    The Future of Online Shopping
                  </h4>
                  <p class="text-sm text-gray-600">
                    Discover the emerging trends that will shape e-commerce in the coming years...
                  </p>
                  <div class="flex items-center justify-between mt-4">
                    <span class="text-xs text-gray-500">March 25, 2023</span>
                    <div class="flex items-center space-x-2">
                      <span class="px-2 py-1 text-xs font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full">
                        Draft
                      </span>
                      <button
                        class="p-1 text-sm font-medium leading-5 text-purple-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
                        aria-label="Edit"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Blog post card -->
              <div class="overflow-hidden bg-white rounded-lg shadow-xs">
                <img
                  class="object-cover w-full h-48"
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Blog post image"
                >
                <div class="p-4">
                  <h4 class="mb-2 text-lg font-semibold text-gray-700">
                    Customer Retention Strategies
                  </h4>
                  <p class="text-sm text-gray-600">
                    Learn how to keep customers coming back to your online store...
                  </p>
                  <div class="flex items-center justify-between mt-4">
                    <span class="text-xs text-gray-500">February 18, 2023</span>
                    <div class="flex items-center space-x-2">
                      <span class="px-2 py-1 text-xs font-semibold leading-tight text-green-700 bg-green-100 rounded-full">
                        Published
                      </span>
                      <button
                        class="p-1 text-sm font-medium leading-5 text-purple-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
                        aria-label="Edit"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Blog post editor -->
            <div class="min-w-0 p-4 bg-white rounded-lg shadow-xs">
              <h4 class="mb-4 font-semibold text-gray-800">
                Post Editor
              </h4>
              <div class="mb-4">
                <label class="block text-sm text-gray-700 mb-2">
                  Title
                </label>
                <input
                  class="block w-full mt-1 text-sm text-gray-700 bg-gray-100 border-0 rounded-md focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                  placeholder="Enter post title"
                >
              </div>
              <div class="mb-4">
                <label class="block text-sm text-gray-700 mb-2">
                  Content
                </label>
                <textarea
                  class="block w-full mt-1 text-sm text-gray-700 bg-gray-100 border-0 rounded-md form-textarea focus:border-purple-400 focus:outline-none focus:shadow-outline-purple"
                  rows="6"
                  placeholder="Write your post content here..."
                />
              </div>
              <div class="flex justify-between">
                <div>
                  <button class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                    Save
                  </button>
                  <button class="px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition-colors duration-150 bg-white border border-gray-300 rounded-lg active:bg-gray-100 hover:bg-gray-100 focus:outline-none focus:shadow-outline-gray ml-2">
                    Preview
                  </button>
                </div>
                <button class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-green">
                  Publish
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
