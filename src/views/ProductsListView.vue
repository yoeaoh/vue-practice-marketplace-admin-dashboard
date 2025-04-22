<script setup lang="ts">
import PageContentLayout from '@/components/layout/PageContentLayout.vue'
import PageCta from '@/components/PageCta.vue'
import ProductCard from '@/components/ProductCard.vue'
import { IconName } from '@/enums/IconName.ts'
import { useProductsStore } from '@/stores/products.ts'
import { storeToRefs } from 'pinia'
import { onMounted, watch } from 'vue'

const productsStore = useProductsStore()
const { products, isLoading } = storeToRefs(productsStore)

onMounted(() => productsStore.loadProducts())
</script>

<template>
  <PageContentLayout :is-loading="isLoading">
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
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :price="product.price"
        :title="product.name"
        :description="product.description"
        :stock="product.stock"
      >
        {{ product.name }}
      </ProductCard>
    </template>
  </PageContentLayout>
</template>
