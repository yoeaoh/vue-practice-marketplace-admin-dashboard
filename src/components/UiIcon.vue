<script setup lang="ts">
const { name, size = 24 } = defineProps<{
  name: iconNames
  size?: number
}>()

type iconNames = keyof typeof iconsMap

const iconsMap = {
  'dashboard': 'icon-dashboard',
  'products': 'icon-products',
  'orders': 'icon-orders',
  'users': 'icon-users',
  'blog': 'icon-blog',
  'search': 'icon-search',
  'notification': 'icon-notification',
  'edit': 'icon-edit',
  'delete': 'icon-delete',
  'view': 'icon-view',
  'revenue': 'icon-revenue',
  'plus': 'icon-plus',
  'chevron-down': 'icon-chevron-down',
  'chevron-left': 'icon-chevron-left',
  'chevron-right': 'icon-chevron-right',
  'settings': 'icon-settings',
  'profile': 'icon-profile',
  'logout': 'icon-logout',
  'inventory': 'icon-inventory',
  'customer': 'icon-customer',
}

const iconPath = `/svg-sprite.svg#${iconsMap[name]}`
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <use :href="iconPath" />
  </svg>
</template>
