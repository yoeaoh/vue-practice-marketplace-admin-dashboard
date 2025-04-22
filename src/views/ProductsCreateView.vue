<script setup>
import UiButton from '@/components/UiButton.vue'
import UiIcon from '@/components/UiIcon.vue'
import { ButtonType } from '@/enums/ButtonType.js'
import { IconName } from '@/enums/IconName.js'
import { computed, defineComponent, defineEmits, defineProps, h, reactive, ref } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    default: () => ({}),
  },
  isEditing: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['submit', 'cancel'])

// Form state
const form = reactive({
  title: props.product.title || '',
  description: props.product.description || '',
  price: props.product.price || '',
  stock: props.product.stock || 0,
  status: props.product.status || 'active',
  image: null,
})

// Validation errors
const errors = reactive({
  title: '',
  description: '',
  price: '',
  stock: '',
  image: '',
})

// UI state
const isSubmitting = ref(false)
const imagePreview = ref(props.product.imageUrl || '')

// Handle image selection
function handleImageChange(event) {
  const file = event.target.files[0]
  if (!file)
    return

  // Validate file type
  const validTypes = ['image/jpeg', 'image/png', 'image/gif']
  if (!validTypes.includes(file.type)) {
    errors.image = 'Please select a valid image file (PNG, JPG, GIF)'
    return
  }

  // Validate file size (max 10MB)
  if (file.size > 10 * 1024 * 1024) {
    errors.image = 'Image size should not exceed 10MB'
    return
  }

  // Clear previous error
  errors.image = ''

  // Store file
  form.image = file

  // Create preview
  const reader = new FileReader()
  reader.onload = (e) => {
    imagePreview.value = e.target.result
  }
  reader.readAsDataURL(file)
}

// Validate form
function validateForm() {
  let isValid = true

  // Reset errors
  Object.keys(errors).forEach((key) => {
    errors[key] = ''
  })

  // Validate title
  if (!form.title.trim()) {
    errors.title = 'Product title is required'
    isValid = false
  }
  else if (form.title.length < 3) {
    errors.title = 'Product title must be at least 3 characters'
    isValid = false
  }

  // Validate description
  if (!form.description.trim()) {
    errors.description = 'Product description is required'
    isValid = false
  }
  else if (form.description.length < 10) {
    errors.description = 'Description must be at least 10 characters'
    isValid = false
  }

  // Validate price
  if (!form.price) {
    errors.price = 'Price is required'
    isValid = false
  }
  else {
    const priceValue = Number.parseFloat(form.price)
    if (isNaN(priceValue) || priceValue <= 0) {
      errors.price = 'Please enter a valid price greater than 0'
      isValid = false
    }
  }

  // Validate stock
  if (form.stock === '' || form.stock === null) {
    errors.stock = 'Stock quantity is required'
    isValid = false
  }
  else {
    const stockValue = Number.parseInt(form.stock)
    if (isNaN(stockValue) || stockValue < 0) {
      errors.stock = 'Stock quantity must be a non-negative number'
      isValid = false
    }
  }

  // Validate category
  if (!form.category) {
    errors.category = 'Please select a category'
    isValid = false
  }

  return isValid
}

// Handle form submission
async function handleSubmit() {
  if (!validateForm())
    return

  try {
    isSubmitting.value = true

    // In a real application, you would upload the image to a server
    // and get back a URL to store with the product data

    // Create product data object
    const productData = {
      title: form.title,
      description: form.description,
      price: Number.parseFloat(form.price),
      stock: Number.parseInt(form.stock),
      status: form.status,
      // In a real app, this would be the URL returned from the server
      imageUrl: imagePreview.value,
    }

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Emit the product data to parent component
    emit('submit', productData)

    // Reset form if not editing
    if (!props.isEditing) {
      resetForm()
    }

    // Show success message
    alert(`Product ${props.isEditing ? 'updated' : 'created'} successfully!`)
  }
  catch (error) {
    console.error('Error submitting product:', error)
    alert('An error occurred. Please try again.')
  }
  finally {
    isSubmitting.value = false
  }
}

// Reset form
function resetForm() {
  // Reset form fields
  Object.keys(form).forEach((key) => {
    if (key === 'status') {
      form[key] = 'active'
    }
    else if (key === 'stock') {
      form[key] = 0
    }
    else {
      form[key] = ''
    }
  })

  // Reset image preview
  imagePreview.value = ''

  // Reset errors
  Object.keys(errors).forEach((key) => {
    errors[key] = ''
  })

  // Emit cancel event
  emit('cancel')
}
</script>

<template>
  <div class="bg-white rounded-lg shadow-xs overflow-hidden">
    <div class="p-6">
      <h2 class="text-lg font-semibold text-gray-700 mb-6">
        {{ isEditing ? 'Edit Product' : 'Create New Product' }}
      </h2>

      <form
        class="space-y-6"
        @submit.prevent="handleSubmit"
      >
        <!-- Product Title -->
        <div>
          <label
            for="title"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Product Title <span class="text-red-500">*</span>
          </label>
          <input
            id="title"
            v-model="form.title"
            type="text"
            class="w-full px-3 py-2 border rounded-md text-sm"
            :class="errors.title ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-purple-500 focus:border-purple-500'"
            placeholder="Enter product title"
          >
          <p
            v-if="errors.title"
            class="mt-1 text-sm text-red-600"
          >
            {{ errors.title }}
          </p>
        </div>

        <!-- Product Description -->
        <div>
          <label
            for="description"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Description <span class="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            v-model="form.description"
            rows="4"
            class="w-full px-3 py-2 border rounded-md text-sm"
            :class="errors.description ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-purple-500 focus:border-purple-500'"
            placeholder="Enter product description"
          />
          <p
            v-if="errors.description"
            class="mt-1 text-sm text-red-600"
          >
            {{ errors.description }}
          </p>
        </div>

        <!-- Price and Stock Row -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Product Price -->
          <div>
            <label
              for="price"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Price ($) <span class="text-red-500">*</span>
            </label>
            <div class="relative rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span class="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                id="price"
                v-model="form.price"
                type="text"
                class="w-full pl-7 pr-3 py-2 border rounded-md text-sm"
                :class="errors.price ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-purple-500 focus:border-purple-500'"
                placeholder="0.00"
              >
            </div>
            <p
              v-if="errors.price"
              class="mt-1 text-sm text-red-600"
            >
              {{ errors.price }}
            </p>
          </div>

          <!-- Product Stock -->
          <div>
            <label
              for="stock"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Stock Quantity <span class="text-red-500">*</span>
            </label>
            <input
              id="stock"
              v-model="form.stock"
              type="number"
              min="0"
              class="w-full px-3 py-2 border rounded-md text-sm"
              :class="errors.stock ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-purple-500 focus:border-purple-500'"
              placeholder="Enter stock quantity"
            >
            <p
              v-if="errors.stock"
              class="mt-1 text-sm text-red-600"
            >
              {{ errors.stock }}
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              for="status"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Status
            </label>
            <div class="flex items-center space-x-4">
              <div class="flex items-center">
                <input
                  id="status-active"
                  v-model="form.status"
                  type="radio"
                  value="active"
                  class="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                >
                <label
                  for="status-active"
                  class="ml-2 text-sm text-gray-700"
                >Active</label>
              </div>
              <div class="flex items-center">
                <input
                  id="status-draft"
                  v-model="form.status"
                  type="radio"
                  value="draft"
                  class="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                >
                <label
                  for="status-draft"
                  class="ml-2 text-sm text-gray-700"
                >Draft</label>
              </div>
            </div>
          </div>
        </div>

        <!-- Product Image -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Product Image
          </label>
          <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div class="space-y-1 text-center">
              <div
                v-if="imagePreview"
                class="mb-4"
              >
                <img
                  :src="imagePreview"
                  alt="Preview"
                  class="mx-auto h-32 w-auto object-contain"
                >
              </div>
              <div
                v-else
                class="flex text-sm text-gray-600"
              >
                <Icon
                  name="image"
                  class="mx-auto h-12 w-12 text-gray-400"
                />
              </div>
              <div class="flex text-sm text-gray-600">
                <label
                  for="file-upload"
                  class="relative cursor-pointer bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-purple-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    class="sr-only"
                    accept="image/*"
                    @change="handleImageChange"
                  >
                </label>
                <p class="pl-1">
                  or drag and drop
                </p>
              </div>
              <p class="text-xs text-gray-500">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
          <p
            v-if="errors.image"
            class="mt-1 text-sm text-red-600"
          >
            {{ errors.image }}
          </p>
        </div>

        <!-- Form Actions -->
        <div class="flex items-center justify-end space-x-3 pt-4">
          <UiButton
            :variant="ButtonType.DEFAULT"
            @click="resetForm"
          >
            Cancel
          </UiButton>

          <UiButton
            type="submit"
            :variant="ButtonType.PRIMARY"
            :disabled="isSubmitting"
          >
            <span
              v-if="isSubmitting"
              class="flex gap-x-1 items-center"
            >
              <UiIcon :name="IconName.LOADING" />

              <span>
                Saving...
              </span>
            </span>

            <span v-else>
              {{ isEditing ? 'Update Product' : 'Create Product' }}
            </span>
          </UiButton>
        </div>
      </form>
    </div>
  </div>
</template>
