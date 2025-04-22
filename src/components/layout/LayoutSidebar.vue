<script setup lang="ts">
import LayoutSidebarLink from '@/components/layout/LayoutSidebarLink.vue'
import { sidebarMenuItems } from '@/constants/sidebarMenuItems.ts'
import { RouteName } from '@/enums/RouteName.ts'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <aside class="z-20 w-64 overflow-y-auto bg-white flex-shrink-0">
    <div class="py-4 text-gray-500">
      <div class="pl-6 pb-8">
        <RouterLink
          :to="{ name: RouteName.DASHBOARD }"
          class="text-lg font-bold text-gray-800"
        >
          MarketAdmin
        </RouterLink>
      </div>

      <ul class="flex flex-col gap-y-4 ml-4">
        <LayoutSidebarLink
          v-for="item in sidebarMenuItems"
          :key="item.id"
          :icon="item.icon"
          :route-name="item.route"
          :current-route="route.name"
          :title="item.title"
        />
      </ul>
    </div>
  </aside>
</template>
