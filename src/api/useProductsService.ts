import type { IProduct, IProductDto } from '@/interfaces/IProduct.ts'
import api from '@/api/api.ts'

export function useProductsService() {
  const getProducts = () => api.get('/products')

  const getProductById = (id: number) => api.get(`/products/${id}`)

  const deleteProductById = (id: number) => api.delete(`/products/${id}`)

  const postNewProduct = (product: IProductDto): Promise<{ data: IProduct }> => api.post('/products', product)

  return {
    getProducts,
    deleteProductById,
    getProductById,
    postNewProduct,
  }
}
