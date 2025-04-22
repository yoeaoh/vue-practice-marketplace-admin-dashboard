<script setup lang="ts">
import PageContentLayout from '@/components/layout/PageContentLayout.vue'
import PageCta from '@/components/PageCta.vue'
import { IconName } from '@/enums/IconName.ts'
</script>

<template>
  <PageContentLayout>
    <template #title>
      Products
    </template>

    <template #cta>
      <PageCta
        title="Manage your products inventory"
        :icon="IconName.PRODUCTS"
        button-text="Add product"
        :button-action="() => console.log('products')"
      />
    </template>

    <template #default>
      <!-- TODO: make cards instead of table -->
    </template>
  </PageContentLayout>
</template>
