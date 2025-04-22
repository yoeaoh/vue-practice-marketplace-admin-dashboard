<script setup lang="ts">
import BlogPostCard from '@/components/BlogPostCard.vue'
import PageContentLayout from '@/components/layout/PageContentLayout.vue'
import PageCta from '@/components/PageCta.vue'
import UiButton from '@/components/UiButton.vue'
import { ButtonType } from '@/enums/ButtonType.ts'
import { IconName } from '@/enums/IconName.ts'
</script>

<template>
  <PageContentLayout>
    <template #title>
      Blog Posts
    </template>

    <template #cta>
      <PageCta
        title="Manage your blog content"
        :icon="IconName.BLOG"
        button-text="Create post"
        :button-action="() => console.log('blog')"
      />
    </template>

    <div class="grid gap-6 mb-8 grid-cols-3">
      <BlogPostCard
        title="10 Tips for E-commerce Success"
        text="Learn the top strategies for growing your online store and increasing sales..."
        date="April 10, 2023"
        status="published"
      />

      <BlogPostCard
        title="The Future of Online Shopping"
        text="Discover the emerging trends that will shape e-commerce in the coming years..."
        date="March 25, 2023"
        status="draft"
      />

      <BlogPostCard
        title="Customer Retention Strategies"
        text="Learn how to keep customers coming back to your online store..."
        date="February 18, 2023"
        status="published"
      />
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
          class="px-4 py-2 block w-full mt-1 text-sm text-gray-700 bg-gray-100 border-1 border-stone-300 rounded-md form-textarea focus:border-purple-400 focus:outline-none focus:shadow-outline-purple"
          placeholder="Enter post title"
        >
      </div>

      <div class="mb-4">
        <label class="block text-sm text-gray-700 mb-2">
          Content
        </label>

        <textarea
          class="px-4 py-2 block w-full mt-1 text-sm text-gray-700 bg-gray-100 border-1 border-stone-300 rounded-md form-textarea focus:border-purple-400 focus:outline-none focus:shadow-outline-purple"
          rows="6"
          placeholder="Write your post content here..."
        />
      </div>

      <div class="flex justify-between">
        <div class="flex gap-x-2">
          <UiButton :variant="ButtonType.PRIMARY">
            Save
          </UiButton>

          <UiButton :variant="ButtonType.DEFAULT">
            Preview
          </UiButton>
        </div>

        <UiButton :variant="ButtonType.GOOD">
          Publish
        </UiButton>
      </div>
    </div>
  </PageContentLayout>
</template>
