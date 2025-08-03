<template>
  <div
    class="mx-auto my-4 flex w-fit items-center space-x-3 rounded-md border border-red-200 bg-red-50 p-4 text-red-800 dark:border-red-800 dark:bg-red-900/10 dark:text-red-100"
  >
    <i class="pi pi-exclamation-circle" />
    <div>
      <h2 class="text-sm font-semibold">Error loading posts</h2>
      <p class="mt-1 text-sm text-red-700 dark:text-red-300">
        There was a problem while trying to fetch the posts. Please try again
        later.
      </p>
    </div>
  </div>
</template>
