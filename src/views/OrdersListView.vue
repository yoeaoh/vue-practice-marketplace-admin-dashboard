<script setup lang="ts">
import PageContentLayout from '@/components/layout/PageContentLayout.vue'
import UiButton from '@/components/UiButton.vue'
import { ButtonType } from '@/enums/ButtonType.ts'
</script>

<template>
  <PageContentLayout>
    <template #title>
      Orders
    </template>

    <template #default>
      <div class="flex justify-between mb-8">
        <div class="flex space-x-4">
          <UiButton :variant="ButtonType.PRIMARY">
            All Orders
          </UiButton>

          <UiButton>
            Pending
          </UiButton>

          <UiButton>
            Shipped
          </UiButton>

          <UiButton>
            Delivered
          </UiButton>
        </div>

        <div>
          <UiButton :variant="ButtonType.PRIMARY">
            Export Orders
          </UiButton>
        </div>
      </div>

      <div>
        <!-- TODO: make cards instead of table -->
      </div>
    </template>
  </PageContentLayout>
</template>
