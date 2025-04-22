<script setup lang="ts">
import { ButtonType } from '@/enums/ButtonType.ts'
import { computed } from 'vue'

const {
  variant = ButtonType.DEFAULT,
  disabled = false,
} = defineProps<{
  variant?: ButtonType
  disabled?: boolean
}>()

const buttonClasses = computed(() => ({
  'px-4 py-2 text-gray-700 bg-white border border-gray-300 active:bg-gray-100 hover:bg-gray-100 focus:shadow-outline-gray': variant === ButtonType.DEFAULT,
  'px-4 py-2 text-white bg-purple-600 border border-transparent active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple': variant === ButtonType.PRIMARY,
  'px-4 py-2 text-white bg-purple-800 border border-transparent active:bg-purple-900 hover:bg-purple-700 focus:shadow-outline-purple': variant === ButtonType.PRIMARY_ALT,
  'px-4 py-2 text-white bg-green-600 border border-transparent active:bg-green-600 hover:bg-green-700 focus:shadow-outline-green': variant === ButtonType.GOOD,
  'p-1 text-purple-600 focus:shadow-outline-gray hover:bg-gray-100': variant === ButtonType.ICON,
}))
</script>

<template>
  <button
    :class="buttonClasses"
    class="text-sm font-medium leading-5 rounded-lg cursor-pointer transition-colors duration-150 focus:outline-none"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>
