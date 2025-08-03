<script setup lang="ts">
import PostsGrid from '@/components/posts-grid.vue';
import ConfirmDialog from '@/volt/ConfirmDialog.vue';
import Toast from '@/volt/Toast.vue';
</script>

<template>
  <main class="mx-auto max-w-7xl p-2">
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
