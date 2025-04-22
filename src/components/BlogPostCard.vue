<script setup lang="ts">
import UiButton from '@/components/UiButton.vue'
import UiIcon from '@/components/UiIcon.vue'
import { ButtonType } from '@/enums/ButtonType.ts'
import { IconName } from '@/enums/IconName.ts'

defineProps<{
  title: string
  text: string
  date: string
  status: 'published' | 'draft'
}>()
</script>

<template>
  <div class="overflow-hidden bg-white rounded-lg shadow-xs">
    <img
      class="object-cover w-full h-48"
      src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      :alt="title"
    >
    <div class="p-4">
      <h4 class="mb-2 text-lg font-semibold text-gray-700">
        {{ title }}
      </h4>

      <p class="text-sm text-gray-600">
        {{ text }}
      </p>

      <div class="flex items-center justify-between mt-4">
        <span class="text-xs text-gray-500">
          {{ date }}
        </span>

        <div class="flex items-center space-x-2">
          <span
            v-if="status === 'published'"
            class="px-2 py-1 text-xs font-semibold leading-tight text-green-700 bg-green-100 rounded-full"
          >
            Published
          </span>

          <span
            v-if="status === 'draft'"
            class="px-2 py-1 text-xs font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full"
          >
            Draft
          </span>

          <UiButton :variant="ButtonType.ICON">
            <UiIcon
              :name="IconName.EDIT"
              :size="20"
            />
          </UiButton>
        </div>
      </div>
    </div>
  </div>
</template>
