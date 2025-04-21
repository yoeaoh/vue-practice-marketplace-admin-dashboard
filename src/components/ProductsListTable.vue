<script setup lang="ts">
import UiIcon from '@/components/UiIcon.vue'
import { IconName } from '@/enums/IconName.ts'
</script>

<template>
  <table class="w-full whitespace-no-wrap">
    <thead>
      <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
        <th class="px-4 py-3">
          Product
        </th>
        <th class="px-4 py-3">
          Status
        </th>
        <th class="px-4 py-3">
          Inventory
        </th>
        <th class="px-4 py-3">
          Vendor
        </th>
        <th class="px-4 py-3">
          Actions
        </th>
      </tr>
    </thead>

    <tbody class="bg-white divide-y">
      <tr class="text-gray-700">
        <td class="px-4 py-3">
          <div class="flex items-center text-sm">
            <div class="relative w-8 h-8 mr-3 rounded-full">
              <img
                class="object-cover w-full h-full rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&facepad=3&fit=facearea&s=707b9c33066bf8808c934c8ab394dff6"
                alt=""
                loading="lazy"
              >
              <div
                class="absolute inset-0 rounded-full shadow-inner"
                aria-hidden="true"
              />
            </div>
            <div>
              <p class="font-semibold">
                Premium Headphones
              </p>
              <p class="text-xs text-gray-600">
                Electronics
              </p>
            </div>
          </div>
        </td>

        <td class="px-4 py-3 text-xs">
          <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full">
            Active
          </span>
        </td>

        <td class="px-4 py-3 text-sm">
          142 in stock
        </td>

        <td class="px-4 py-3 text-sm">
          AudioTech Inc.
        </td>

        <td class="px-4 py-3">
          <div class="flex items-center space-x-4 text-sm">
            <button
              class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
              aria-label="Edit"
            >
              <UiIcon
                :name="IconName.EDIT"
                :size="20"
              />
            </button>

            <button
              class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
              aria-label="Delete"
            >
              <UiIcon
                :name="IconName.DELETE"
                :size="20"
              />
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
