<script setup lang="ts">
import UiButton from '@/components/UiButton.vue'
import UiIcon from '@/components/UiIcon.vue'
import { ButtonType } from '@/enums/ButtonType.js'
import { IconName } from '@/enums/IconName.js'
import { RouteName } from '@/enums/RouteName.ts'
import { delay } from '@/helpers/delay.ts'
import { useProductsStore } from '@/stores/products.ts'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

// Валидации пока удалю, оставляю минимальный функционал.
const router = useRouter()
const productsStore = useProductsStore()

const form = reactive({
  name: '',
  description: '',
  price: 0,
  stock: 0,
})

async function handleSubmit() {
  try {
    const productData = {
      name: form.name,
      description: form.description,
      price: `$${Number.parseFloat(form.price)}`,
      stock: Number.parseInt(form.stock),
    }

    // Simulate API call delay
    await delay(2000)

    const newProduct = await productsStore.createProduct(productData)

    if (newProduct) {
      // Reset form if not editing
      resetForm()

      // Show success message
      console.log(`Product created successfully!`)

      // После создания, при успехе, перенести на страницу всех товаров.
      // Потом можно добавить тост с уведомлением о добавлении
      await router.push({ name: RouteName.PRODUCTS })
    }
  }
  catch (error) {
    console.error('Error submitting product:', error)
  }
}

// Reset form
function resetForm() {
  // Reset form fields
  Object.keys(form).forEach((key) => {
    if (key === 'price') {
      form[key] = 0
    }
    else if (key === 'stock') {
      form[key] = 0
    }
    else {
      form[key] = ''
    }
  })
}
</script>

<template>
  <div class="bg-white rounded-lg shadow-xs overflow-hidden">
    <div class="p-6">
      <h2 class="text-lg font-semibold text-gray-700 mb-6">
        Create New Product
      </h2>

      <form
        class="space-y-6"
        @submit.prevent="handleSubmit"
      >
        <!-- Product Name -->
        <div>
          <label
            for="name"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Product Name
          </label>

          <input
            id="name"
            v-model="form.name"
            type="text"
            class="w-full px-3 py-2 border rounded-md text-sm border-gray-300 focus:ring-purple-500 focus:border-purple-500"
            placeholder="Enter product name"
          >
        </div>

        <!-- Product Description -->
        <div>
          <label
            for="description"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>

          <textarea
            id="description"
            v-model="form.description"
            rows="4"
            class="w-full px-3 py-2 border rounded-md text-sm border-gray-300 focus:ring-purple-500 focus:border-purple-500"
            placeholder="Enter product description"
          />
        </div>

        <!-- Price and Stock Row -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Product Price -->
          <div>
            <label
              for="price"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Price ($)
            </label>

            <div class="relative rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span class="text-gray-500 sm:text-sm">$</span>
              </div>

              <input
                id="price"
                v-model="form.price"
                type="number"
                min="0"
                class="w-full pl-7 pr-3 py-2 border rounded-md text-sm border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Enter price"
              >
            </div>
          </div>

          <!-- Product Stock -->
          <div>
            <label
              for="stock"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Stock Quantity
            </label>

            <input
              id="stock"
              v-model="form.stock"
              type="number"
              min="0"
              class="w-full px-3 py-2 border rounded-md text-sm border-gray-300 focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter stock quantity"
            >
          </div>
        </div>

        <!-- Form Actions -->
        <div class="flex items-center justify-end space-x-3 pt-4">
          <UiButton
            :variant="ButtonType.DEFAULT"
            @click="resetForm"
          >
            Reset form
          </UiButton>

          <UiButton
            type="submit"
            :variant="ButtonType.PRIMARY"
          >
            Create Product
          </UiButton>
        </div>
      </form>
    </div>
  </div>
</template>
