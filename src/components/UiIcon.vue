<script setup lang="ts">
import type { IconName } from '@/enums/IconName.ts'

const { name, size = 24 } = defineProps<{
  name: IconName
  size?: number
}>()

const iconPath = `/svg-sprite.svg#${name}`
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
