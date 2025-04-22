import axios from 'axios'

export function useProductsService() {
  const getProducts = () => axios.get('https://05949e39e3414691.mokky.dev/products')

  return {
    getProducts,
  }
}
