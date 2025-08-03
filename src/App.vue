<script setup lang="ts">
import ConfirmDialog from '@/volt/ConfirmDialog.vue';
import Toast from '@/volt/Toast.vue';
import PostsGrid from '@/components/posts-grid.vue';
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import PostsFallback from '@/components/posts-fallback.vue';
</script>

<template class="max-w-2xl">
  <Header />
  <main class="container space-y-4">
    <Suspense>
      <PostsGrid />
      <template #fallback>
        <PostsFallback />
      </template>
    </Suspense>
  </main>
  <Footer />
  <Toast />
  <ConfirmDialog />
</template>
