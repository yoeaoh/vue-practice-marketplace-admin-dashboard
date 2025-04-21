<script setup lang="ts">
import LayoutHeader from '@/components/layout/LayoutHeader.vue'
import LayoutSidebar from '@/components/layout/LayoutSidebar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex h-screen bg-gray-50">
    <LayoutSidebar />

    <div class="flex flex-col flex-1 w-full">
      <LayoutHeader />

      <main class="overflow-y-auto">
        <div class="container px-6 mx-auto grid">
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>
