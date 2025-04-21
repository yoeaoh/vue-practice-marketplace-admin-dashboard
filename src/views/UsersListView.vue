<script setup lang="ts">
import PageContentLayout from '@/components/layout/PageContentLayout.vue'
import PageCta from '@/components/PageCta.vue'
import UiIcon from '@/components/UiIcon.vue'
import { IconName } from '@/enums/IconName.ts'
</script>

<template>
  <PageContentLayout>
    <template #title>
      Users
    </template>

    <template #cta>
      <PageCta
        title="Manage your users and permissions"
        :icon="IconName.USERS"
        button-text="Add user"
        :button-action="() => console.log('users')"
      />
    </template>

    <template #default>
      <div class="w-full overflow-hidden rounded-lg shadow-xs">
        <div class="w-full overflow-x-auto">
          <table class="w-full whitespace-no-wrap">
            <thead>
              <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
                <th class="px-4 py-3">
                  User
                </th>
                <th class="px-4 py-3">
                  Role
                </th>
                <th class="px-4 py-3">
                  Status
                </th>
                <th class="px-4 py-3">
                  Joined
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
                        Sarah Johnson
                      </p>
                      <p class="text-xs text-gray-600">
                        sarah.j@example.com
                      </p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm">
                  Admin
                </td>
                <td class="px-4 py-3 text-xs">
                  <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full">
                    Active
                  </span>
                </td>
                <td class="px-4 py-3 text-sm">
                  January 15, 2022
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

              <tr class="text-gray-700">
                <td class="px-4 py-3">
                  <div class="flex items-center text-sm">
                    <div class="relative w-8 h-8 mr-3 rounded-full">
                      <img
                        class="object-cover w-full h-full rounded-full"
                        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
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
                        Michael Roberts
                      </p>
                      <p class="text-xs text-gray-600">
                        m.roberts@example.com
                      </p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm">
                  Editor
                </td>
                <td class="px-4 py-3 text-xs">
                  <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full">
                    Active
                  </span>
                </td>
                <td class="px-4 py-3 text-sm">
                  March 10, 2022
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

              <tr class="text-gray-700">
                <td class="px-4 py-3">
                  <div class="flex items-center text-sm">
                    <div class="relative w-8 h-8 mr-3 rounded-full">
                      <img
                        class="object-cover w-full h-full rounded-full"
                        src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
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
                        Emily Chen
                      </p>
                      <p class="text-xs text-gray-600">
                        e.chen@example.com
                      </p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm">
                  Customer
                </td>
                <td class="px-4 py-3 text-xs">
                  <span class="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full">
                    Suspended
                  </span>
                </td>
                <td class="px-4 py-3 text-sm">
                  April 8, 2023
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
        </div>
      </div>
    </template>
  </PageContentLayout>
</template>
