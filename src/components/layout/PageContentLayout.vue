<script setup lang="ts">
</script>

<template>
  <div>
    <h2 class="my-6 text-2xl font-semibold text-gray-700">
      <slot name="title" />
    </h2>

    <slot name="cta" />

    <div class="w-full rounded-lg">
      <div class="w-full overflow-x-auto">
        <slot />
      </div>
    </div>
  </div>
</template>
