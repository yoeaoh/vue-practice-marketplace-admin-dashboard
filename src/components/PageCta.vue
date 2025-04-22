<script setup lang="ts">
import type { IconName } from '@/enums/IconName.ts'
import UiButton from '@/components/UiButton.vue'
import UiIcon from '@/components/UiIcon.vue'
import { ButtonType } from '@/enums/ButtonType.ts'

defineProps<{
  title: string
  icon: IconName
  buttonAction: () => void
  buttonText: string
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

    <UiButton
      :variant="ButtonType.PRIMARY_ALT"
      @click="buttonAction"
    >
      {{ buttonText }}
    </UiButton>
  </div>
</template>
