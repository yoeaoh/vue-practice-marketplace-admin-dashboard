import type { IProduct, IProductDto } from '@/interfaces/IProduct.ts'
import type { DeepReadonly, Ref } from 'vue'
import { useProductsService } from '@/api/useProductsService.ts'
import { delay } from '@/helpers/delay.ts'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductsStore = defineStore('products', () => {
  const {
    getProducts,
    getProductById,
    deleteProductById,
    postNewProduct,
  } = useProductsService()

  const _products = ref<IProduct[]>([])
  const isLoading = ref(false)

  // Добавил optimisticUiUpdate, чтобы была возможность без обновления страницы обновить стейт
  // Сейчас не будет использоваться, т.к. форма на отдельной странице и при создании нового товара
  // всё равно перейдём на страницу всех товаров и затриггерим обновление
  async function createProduct(product: IProductDto, optimisticUiUpdate: boolean = false) {
    try {
      const { status, data } = await postNewProduct(product)

      if (status === 200 && data && optimisticUiUpdate) {
        _products.value.push(data)
      }

      return data
    }
    catch (e) {
      console.error(e)
    }
  }

  async function deleteProduct(deletedProductId: number) {
    try {
      const response = await deleteProductById(deletedProductId)

      if (response.status === 200) {
        _products.value = _products.value.filter((product: IProduct) => product.id !== deletedProductId)
      }
    }
    catch (e) {
      console.error(e)
    }
  }

  async function loadProducts() {
    try {
      isLoading.value = true

      // Чтобы не так быстро грузило
      await delay(1000)

      const { data } = await getProducts()
      _products.value = data

      console.log('loading products')
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
    createProduct,
    deleteProduct,
  }
})
