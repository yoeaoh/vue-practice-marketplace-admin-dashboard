<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  stock: number
}>()

const stockStatus = computed(() => {
  if (props.stock <= 0)
    return { text: 'Out of Stock', color: 'red' }
  if (props.stock < 5000)
    return { text: 'Low Stock', color: 'orange' }
  return { text: 'In Stock', color: 'green' }
})
</script>

<template>
  <span :class="`px-2 py-1 text-xs font-semibold leading-tight text-${stockStatus.color}-700 bg-${stockStatus.color}-100 rounded-full`">
    {{ stock }} {{ stockStatus.text }}
  </span>
</template>
