<script setup lang="ts">
import UiIcon from '@/components/UiIcon.vue'

defineProps<{
  activeTab: string
}>()

defineEmits<{
  (e: 'update:activeTab', newTab: string): void
}>()
</script>

<template>
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
            @click.prevent="$emit('update:activeTab', 'dashboard')"
          >
            <UiIcon name="dashboard" />
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
            @click.prevent="$emit('update:activeTab', 'products')"
          >
            <UiIcon name="products" />
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
            @click.prevent="$emit('update:activeTab', 'orders')"
          >
            <UiIcon name="orders" />
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
            @click.prevent="$emit('update:activeTab', 'users')"
          >
            <UiIcon name="users" />
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
            @click.prevent="$emit('update:activeTab', 'blog')"
          >
            <UiIcon name="blog" />
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
</template>
