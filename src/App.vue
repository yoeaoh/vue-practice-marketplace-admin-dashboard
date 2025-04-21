<script setup lang="ts">
import { ref } from 'vue'

// State management
const activeTab = ref('dashboard')
const isNotificationsMenuOpen = ref(false)
const isProfileMenuOpen = ref(false)

// Toggle functions
function toggleNotificationsMenu() {
  isNotificationsMenuOpen.value = !isNotificationsMenuOpen.value
  isProfileMenuOpen.value = false
}

function toggleProfileMenu() {
  isProfileMenuOpen.value = !isProfileMenuOpen.value
  isNotificationsMenuOpen.value = false
}

function onChangeActiveTab(newValue: string) {
  activeTab.value = newValue
}
</script>

<template>
  <RouterView />
</template>
