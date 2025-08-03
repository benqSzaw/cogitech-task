<script setup lang="ts">
import ConfirmDialog from '@/volt/ConfirmDialog.vue';
import Toast from '@/volt/Toast.vue';
import PostsGrid from '@/components/posts-grid.vue';
import DarkModeButton from '@/components/dark-mode-button.vue';
</script>

<template>
  <main class="mx-auto max-w-7xl p-2">
    <DarkModeButton />
    <Suspense>
      <PostsGrid />
      <template #fallback>
        <div>Loading posts...</div>
      </template>
    </Suspense>
  </main>
  <Toast />
  <ConfirmDialog />
</template>
