<script setup lang="ts">
import PageContentLayout from '@/components/layout/PageContentLayout.vue'
import PageCta from '@/components/PageCta.vue'
import ProductCard from '@/components/ProductCard.vue'
import { IconName } from '@/enums/IconName.ts'
import { RouteName } from '@/enums/RouteName.ts'
import { useProductsStore } from '@/stores/products.ts'
import { storeToRefs } from 'pinia'
import { onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'

const productsStore = useProductsStore()
const router = useRouter()

async function deleteProduct(id: number) {
  await productsStore.deleteProduct(id)
}

async function onCreateNewProductClick() {
  router.push({ name: RouteName.CREATE_PRODUCT })
  // await productsStore.createProduct({
  //   name: '234 product',
  //   description: '123test new product',
  //   price: '$123',
  //   stock: 234,
  // })
}

watch(productsStore.products, productsStore.loadProducts, { immediate: true })

// onMounted(() => productsStore.loadProducts())
</script>

<template>
  <PageContentLayout :is-loading="productsStore.isLoading">
    <template #title>
      Products
    </template>

    <template #cta>
      <PageCta
        title="Manage your products inventory"
        :icon="IconName.PRODUCTS"
        button-text="Add product"
        :button-action="onCreateNewProductClick"
      />
    </template>

    <template #default>
      <ProductCard
        v-for="product in productsStore.products"
        :id="product.id"
        :key="product.id"
        :price="product.price"
        :title="product.name"
        :description="product.description"
        :stock="product.stock"
        @delete="deleteProduct"
      >
        {{ product.name }}
      </ProductCard>
    </template>
  </PageContentLayout>
</template>
