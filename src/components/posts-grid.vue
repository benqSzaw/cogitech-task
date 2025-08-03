<script setup lang="ts">
import { useStore } from 'vuex';
import { getPosts } from '@/lib/api.ts';
import PostCard from '@/components/post-card.vue';

const store = useStore();
const { data, error } = await getPosts();
store.commit('setPosts', data.value);
</script>

<template>
  <div v-if="error">
    <p>Error loading posts</p>
  </div>
  <div v-else>
    <h1 class="mb-4 text-center text-4xl font-bold">Posts</h1>
    <ul
      class="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 md:grid-cols-3"
    >
      <PostCard v-for="post in data" :post="post" :key="post.id" />
    </ul>
  </div>
</template>

<style scoped></style>
