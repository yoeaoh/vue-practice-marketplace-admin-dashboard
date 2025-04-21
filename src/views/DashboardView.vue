<script setup lang="ts">
import PageContentLayout from '@/components/layout/PageContentLayout.vue'
import UiIcon from '@/components/UiIcon.vue'
import { IconName } from '@/enums/IconName.ts'
</script>

<template>
  <PageContentLayout>
    <template #title>
      Dashboard
    </template>

    <template #default>
      <div class="grid gap-6 mb-8 grid-cols-4">
        <!-- Card -->
        <div class="flex items-center p-4 bg-white rounded-lg shadow-xs">
          <div class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full">
            <UiIcon
              :name="IconName.REVENUE"
              :size="24"
            />
          </div>
          <div>
            <p class="mb-2 text-sm font-medium text-gray-600">
              Total Revenue
            </p>
            <p class="text-lg font-semibold text-gray-700">
              $87,432.90
            </p>
          </div>
        </div>
        <!-- Card -->
        <div class="flex items-center p-4 bg-white rounded-lg shadow-xs">
          <div class="p-3 mr-4 text-green-500 bg-green-100 rounded-full">
            <UiIcon
              :name="IconName.ORDERS"
              :size="24"
            />
          </div>
          <div>
            <p class="mb-2 text-sm font-medium text-gray-600">
              New Orders
            </p>
            <p class="text-lg font-semibold text-gray-700">
              376
            </p>
          </div>
        </div>
        <!-- Card -->
        <div class="flex items-center p-4 bg-white rounded-lg shadow-xs">
          <div class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full">
            <UiIcon
              :name="IconName.CUSTOMER"
              :size="24"
            />
          </div>
          <div>
            <p class="mb-2 text-sm font-medium text-gray-600">
              New Customers
            </p>
            <p class="text-lg font-semibold text-gray-700">
              45
            </p>
          </div>
        </div>
        <!-- Card -->
        <div class="flex items-center p-4 bg-white rounded-lg shadow-xs">
          <div class="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full">
            <UiIcon
              :name="IconName.INVENTORY"
              :size="24"
            />
          </div>
          <div>
            <p class="mb-2 text-sm font-medium text-gray-600">
              Inventory
            </p>
            <p class="text-lg font-semibold text-gray-700">
              1,257
            </p>
          </div>
        </div>
      </div>

      <!-- Charts -->
      <div class="grid gap-6 mb-8 grid-cols-2">
        <div class="min-w-0 p-4 bg-white rounded-lg shadow-xs">
          <h4 class="mb-4 font-semibold text-gray-800">
            Revenue
          </h4>
          <div class="relative h-56">
            <div class="absolute inset-0 flex items-center justify-center text-gray-500">
              <p>Revenue Chart (Placeholder)</p>
            </div>
          </div>
        </div>
        <div class="min-w-0 p-4 bg-white rounded-lg shadow-xs">
          <h4 class="mb-4 font-semibold text-gray-800">
            Traffic
          </h4>
          <div class="relative h-56">
            <div class="absolute inset-0 flex items-center justify-center text-gray-500">
              <p>Traffic Chart (Placeholder)</p>
            </div>
          </div>
        </div>
      </div>
    </template>
  </PageContentLayout>
</template>
