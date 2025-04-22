import type { IProduct } from '@/interfaces/IProduct.ts'
import type { DeepReadonly, Ref } from 'vue'
import { useProductsService } from '@/api/useProductsService.ts'
import { delay } from '@/helpers/delay.ts'
import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductsStore = defineStore('products', () => {
  const { getProducts } = useProductsService()

  const _products = ref<IProduct[]>([])
  const isLoading = ref(false)

  async function loadProducts() {
    try {
      isLoading.value = true

      // Чтобы не так быстро грузило
      await delay(1000)

      const { data } = await getProducts()
      _products.value = data
    }
    catch (e: unknown) {
      console.error(e)
    }
    finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    products: _products as DeepReadonly<Ref<IProduct[]>>,
    loadProducts,
  }
})
