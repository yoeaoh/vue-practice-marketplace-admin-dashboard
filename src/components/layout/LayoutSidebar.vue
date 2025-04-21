<script setup lang="ts">
import LayoutSidebarLink from '@/components/layout/LayoutSidebarLink.vue'
import { IconName } from '@/enums/IconName.ts'
import { RouteName } from '@/enums/RouteName.ts'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentRoute = computed(() => route.name)
</script>

<template>
  <aside class="z-20 w-64 overflow-y-auto bg-white flex-shrink-0">
    <div class="py-4 text-gray-500">
      <RouterLink
        :to="{ name: RouteName.DASHBOARD }"
        class="ml-6 text-lg font-bold text-gray-800"
      >
        MarketAdmin
      </RouterLink>

      <ul class="mt-6">
        <LayoutSidebarLink
          :icon="IconName.USER"
          :route-name="RouteName.LOGIN"
          :current-route="currentRoute"
          title="Login page test"
        />

        <LayoutSidebarLink
          :icon="IconName.DASHBOARD"
          :route-name="RouteName.DASHBOARD"
          :current-route="currentRoute"
          title="Dashboard"
        />

        <LayoutSidebarLink
          :icon="IconName.PRODUCTS"
          :route-name="RouteName.PRODUCTS"
          :current-route="currentRoute"
          title="Products"
        />

        <LayoutSidebarLink
          :icon="IconName.ORDERS"
          :route-name="RouteName.ORDERS"
          :current-route="currentRoute"
          title="Orders"
        />

        <LayoutSidebarLink
          :icon="IconName.USERS"
          :route-name="RouteName.USERS"
          :current-route="currentRoute"
          title="Users"
        />

        <LayoutSidebarLink
          :icon="IconName.BLOG"
          :route-name="RouteName.BLOG"
          :current-route="currentRoute"
          title="Blog"
        />
      </ul>

      <div class="px-6 my-6">
        <button class="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple cursor-pointer">
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
