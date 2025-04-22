<script setup lang="ts">
import PageContentLayout from '@/components/layout/PageContentLayout.vue'
import PageCta from '@/components/PageCta.vue'
import UiIcon from '@/components/UiIcon.vue'
import { IconName } from '@/enums/IconName.ts'
</script>

<template>
  <PageContentLayout>
    <template #title>
      Users
    </template>

    <template #cta>
      <PageCta
        title="Manage your users and permissions"
        :icon="IconName.USERS"
        button-text="Add user"
        :button-action="() => console.log('users')"
      />
    </template>

    <template #default>
      <!-- TODO: make cards instead of table -->
    </template>
  </PageContentLayout>
</template>
