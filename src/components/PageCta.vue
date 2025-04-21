<script setup lang="ts">
import type { IconName } from '@/enums/IconName.ts'

defineProps<{
  title: string
  icon: IconName
  buttonAction?: () => void
  buttonText?: string
}>()
</script>

<template>
  <div class="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
    <div class="flex items-center">
      <UiIcon
        :name="icon"
        class="mr-2"
      />

      <span>
        {{ title }}
      </span>
    </div>

    <button
      v-if="!$slots.button"
      class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-800 border border-transparent rounded-lg active:bg-purple-900 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple cursor-pointer"
      @click="buttonAction"
    >
      {{ buttonText }}
    </button>
  </div>
</template>
