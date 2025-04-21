<script setup lang="ts">
import type { IconName } from '@/enums/IconName.ts'
import type { RouteName } from '@/enums/RouteName.ts'
import UiIcon from '@/components/UiIcon.vue'

defineProps<{
  icon: IconName
  title: string
  routeName: RouteName
  currentRoute: any
}>()
</script>

<template>
  <li class="relative px-6 py-3">
    <span
      v-if="currentRoute === routeName"
      class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
      aria-hidden="true"
    />

    <RouterLink
      :to="{ name: routeName }"
      class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
    >
      <UiIcon :name="icon" />

      <span class="ml-4">
        {{ title }}
      </span>
    </RouterLink>
  </li>
</template>
