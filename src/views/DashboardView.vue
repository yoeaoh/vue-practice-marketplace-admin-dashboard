<template>
  <div>
    <h2 class="my-6 text-2xl font-semibold text-gray-700">
      Dashboard
    </h2>

    <!-- Cards -->
    <div class="grid gap-6 mb-8 grid-cols-4">
      <!-- Card -->
      <div class="flex items-center p-4 bg-white rounded-lg shadow-xs">
        <div class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-600">
            Total Revenue
          </p>
          <p class="text-lg font-semibold text-gray-700">
            $87,432.90
          </p>
        </div>
      </div>
      <!-- Card -->
      <div class="flex items-center p-4 bg-white rounded-lg shadow-xs">
        <div class="p-3 mr-4 text-green-500 bg-green-100 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ><circle
            cx="8"
            cy="21"
            r="1"
          /><circle
            cx="19"
            cy="21"
            r="1"
          /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-600">
            New Orders
          </p>
          <p class="text-lg font-semibold text-gray-700">
            376
          </p>
        </div>
      </div>
      <!-- Card -->
      <div class="flex items-center p-4 bg-white rounded-lg shadow-xs">
        <div class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle
            cx="9"
            cy="7"
            r="4"
          /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-600">
            New Customers
          </p>
          <p class="text-lg font-semibold text-gray-700">
            45
          </p>
        </div>
      </div>
      <!-- Card -->
      <div class="flex items-center p-4 bg-white rounded-lg shadow-xs">
        <div class="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-600">
            Inventory
          </p>
          <p class="text-lg font-semibold text-gray-700">
            1,257
          </p>
        </div>
      </div>
    </div>

    <!-- Charts -->
    <div class="grid gap-6 mb-8 grid-cols-2">
      <div class="min-w-0 p-4 bg-white rounded-lg shadow-xs">
        <h4 class="mb-4 font-semibold text-gray-800">
          Revenue
        </h4>
        <div class="relative h-56">
          <div class="absolute inset-0 flex items-center justify-center text-gray-500">
            <p>Revenue Chart (Placeholder)</p>
          </div>
        </div>
      </div>
      <div class="min-w-0 p-4 bg-white rounded-lg shadow-xs">
        <h4 class="mb-4 font-semibold text-gray-800">
          Traffic
        </h4>
        <div class="relative h-56">
          <div class="absolute inset-0 flex items-center justify-center text-gray-500">
            <p>Traffic Chart (Placeholder)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
