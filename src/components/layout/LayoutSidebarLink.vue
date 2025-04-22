<script setup lang="ts">
import type { IconName } from '@/enums/IconName.ts'
import type { RouteName } from '@/enums/RouteName.ts'
import UiIcon from '@/components/UiIcon.vue'

defineProps<{
  icon: IconName
  title: string
  routeName: RouteName
}>()
</script>

<template>
  <li class="relative">
    <RouterLink
      :to="{ name: routeName }"
      class="inline-flex items-center w-full text-sm font-semibold hover:text-gray-800 border-l-4 border-stone-200 h-full px-4 py-2"
      exact-active-class="border-purple-600! text-purple-600"
    >
      <UiIcon :name="icon" />

      <span class="ml-4">
        {{ title }}
      </span>
    </RouterLink>
  </li>
</template>
