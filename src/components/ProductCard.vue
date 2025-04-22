<script setup lang="ts">
import ProductStockBadge from '@/components/ProductStockBadge.vue'
import UiButton from '@/components/UiButton.vue'
import UiIcon from '@/components/UiIcon.vue'
import { ButtonType } from '@/enums/ButtonType.ts'
import { IconName } from '@/enums/IconName.js'
import { defineProps } from 'vue'

// Define props
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  stock: {
    type: Number,
    default: 0,
  },
  price: {
    type: [Number, String],
    required: true,
  },
  image: {
    type: String,
    default: 'https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
  },
})
</script>

<template>
  <div class="bg-white rounded-lg shadow-xs mb-4 overflow-hidden hover:shadow-md transition-shadow duration-200">
    <div class="p-4">
      <div class="flex flex-col md:flex-row md:items-center">
        <div class="flex items-center flex-grow md:w-1/3 mb-3 md:mb-0">
          <div class="relative w-12 h-12 mr-3 rounded-md overflow-hidden flex-shrink-0">
            <img
              :src="image"
              :alt="title"
              class="object-cover w-full h-full"
              loading="lazy"
            >
            <div
              class="absolute inset-0 rounded-md shadow-inner"
              aria-hidden="true"
            />
          </div>
          <div>
            <h3 class="font-semibold text-gray-800">
              {{ title }}
            </h3>
            <p class="text-xs text-gray-600 truncate max-w-xs">
              {{ description }}
            </p>
          </div>
        </div>

        <div class="flex flex-wrap md:flex-nowrap md:flex-grow">
          <div class="w-1/2 md:w-auto md:flex-1 mb-2 md:mb-0">
            <p class="text-xs text-gray-500 uppercase tracking-wide">
              Price
            </p>
            <p class="text-sm font-medium text-gray-900">
              {{ price }}
            </p>
          </div>

          <div class="w-1/2 md:w-auto md:flex-1 mb-2 md:mb-0">
            <p class="text-xs text-gray-500 uppercase tracking-wide">
              Stock
            </p>
            <div class="flex items-center">
              <ProductStockBadge :stock="stock" />
            </div>
          </div>

          <div class="w-full md:w-auto flex justify-end items-center space-x-2 mt-3 md:mt-0">
            <UiButton :variant="ButtonType.ICON">
              <UiIcon
                :name="IconName.EDIT"
                class="w-5 h-5"
              />
            </UiButton>

            <UiButton :variant="ButtonType.ICON">
              <UiIcon
                :name="IconName.DELETE"
                class="w-5 h-5"
              />
            </UiButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
