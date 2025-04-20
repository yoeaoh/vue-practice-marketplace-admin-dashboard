<template>
  <div class="flex h-screen bg-gray-50">
    <slot name="sidebar" />

    <div class="flex flex-col flex-1 w-full">
      <slot name="header" />

      <main class="h-full overflow-y-auto">
        <div class="container px-6 mx-auto grid">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>
