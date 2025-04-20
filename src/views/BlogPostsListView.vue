<template>
  <div>
    <h2 class="my-6 text-2xl font-semibold text-gray-700">
      Blog Posts
    </h2>

    <!-- CTA -->
    <div class="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
      <div class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 mr-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" /><path d="M18 14h-8" /><path d="M15 18h-5" /><path d="M10 6h8v4h-8V6Z" /></svg>
        <span>Manage your blog content</span>
      </div>
      <button class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-800 border border-transparent rounded-lg active:bg-purple-900 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
        Create post
      </button>
    </div>

    <!-- Blog post cards -->
    <div class="grid gap-6 mb-8 grid-cols-3">
      <!-- Blog post card -->
      <div class="overflow-hidden bg-white rounded-lg shadow-xs">
        <img
          class="object-cover w-full h-48"
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Blog post image"
        >
        <div class="p-4">
          <h4 class="mb-2 text-lg font-semibold text-gray-700">
            10 Tips for E-commerce Success
          </h4>
          <p class="text-sm text-gray-600">
            Learn the top strategies for growing your online store and increasing sales...
          </p>
          <div class="flex items-center justify-between mt-4">
            <span class="text-xs text-gray-500">April 10, 2023</span>
            <div class="flex items-center space-x-2">
              <span class="px-2 py-1 text-xs font-semibold leading-tight text-green-700 bg-green-100 rounded-full">
                Published
              </span>
              <button
                class="p-1 text-sm font-medium leading-5 text-purple-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
                aria-label="Edit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Blog post card -->
      <div class="overflow-hidden bg-white rounded-lg shadow-xs">
        <img
          class="object-cover w-full h-48"
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Blog post image"
        >
        <div class="p-4">
          <h4 class="mb-2 text-lg font-semibold text-gray-700">
            The Future of Online Shopping
          </h4>
          <p class="text-sm text-gray-600">
            Discover the emerging trends that will shape e-commerce in the coming years...
          </p>
          <div class="flex items-center justify-between mt-4">
            <span class="text-xs text-gray-500">March 25, 2023</span>
            <div class="flex items-center space-x-2">
              <span class="px-2 py-1 text-xs font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full">
                Draft
              </span>
              <button
                class="p-1 text-sm font-medium leading-5 text-purple-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
                aria-label="Edit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Blog post card -->
      <div class="overflow-hidden bg-white rounded-lg shadow-xs">
        <img
          class="object-cover w-full h-48"
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Blog post image"
        >
        <div class="p-4">
          <h4 class="mb-2 text-lg font-semibold text-gray-700">
            Customer Retention Strategies
          </h4>
          <p class="text-sm text-gray-600">
            Learn how to keep customers coming back to your online store...
          </p>
          <div class="flex items-center justify-between mt-4">
            <span class="text-xs text-gray-500">February 18, 2023</span>
            <div class="flex items-center space-x-2">
              <span class="px-2 py-1 text-xs font-semibold leading-tight text-green-700 bg-green-100 rounded-full">
                Published
              </span>
              <button
                class="p-1 text-sm font-medium leading-5 text-purple-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
                aria-label="Edit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Blog post editor -->
    <div class="min-w-0 p-4 bg-white rounded-lg shadow-xs">
      <h4 class="mb-4 font-semibold text-gray-800">
        Post Editor
      </h4>
      <div class="mb-4">
        <label class="block text-sm text-gray-700 mb-2">
          Title
        </label>
        <input
          class="block w-full mt-1 text-sm text-gray-700 bg-gray-100 border-0 rounded-md focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
          placeholder="Enter post title"
        >
      </div>
      <div class="mb-4">
        <label class="block text-sm text-gray-700 mb-2">
          Content
        </label>
        <textarea
          class="block w-full mt-1 text-sm text-gray-700 bg-gray-100 border-0 rounded-md form-textarea focus:border-purple-400 focus:outline-none focus:shadow-outline-purple"
          rows="6"
          placeholder="Write your post content here..."
        />
      </div>
      <div class="flex justify-between">
        <div>
          <button class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
            Save
          </button>
          <button class="px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition-colors duration-150 bg-white border border-gray-300 rounded-lg active:bg-gray-100 hover:bg-gray-100 focus:outline-none focus:shadow-outline-gray ml-2">
            Preview
          </button>
        </div>
        <button class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-green">
          Publish
        </button>
      </div>
    </div>
  </div>
</template>
