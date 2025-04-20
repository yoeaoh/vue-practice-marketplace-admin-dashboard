<script setup lang="ts">
import DesktopLayout from '@/components/DesktopLayout.vue'
import LayoutHeader from '@/components/LayoutHeader.vue'
import LayoutSidebar from '@/components/LayoutSidebar.vue'
import BlogPostsListView from '@/views/BlogPostsListView.vue'
import DashboardView from '@/views/DashboardView.vue'
import OrdersListView from '@/views/OrdersListView.vue'
import ProductsListView from '@/views/ProductsListView.vue'
import UsersListView from '@/views/UsersListView.vue'
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
  <DesktopLayout>
    <template #sidebar>
      <LayoutSidebar
        :active-tab="activeTab"
        @update:active-tab="onChangeActiveTab"
      />
    </template>

    <template #header>
      <LayoutHeader />
    </template>

    <template #default>
      <div>
        <div v-if="activeTab === 'dashboard'">
          <DashboardView />
        </div>

        <!-- Products -->
        <div v-if="activeTab === 'products'">
          <ProductsListView />
        </div>

        <!-- Orders -->
        <div v-if="activeTab === 'orders'">
          <OrdersListView />
        </div>

        <!-- Users -->
        <div v-if="activeTab === 'users'">
          <UsersListView />
        </div>

        <!-- Blog Posts -->
        <div v-if="activeTab === 'blog'">
          <BlogPostsListView />
        </div>
      </div>
    </template>
  </DesktopLayout>
</template>
