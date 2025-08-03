<script setup lang="ts">
import { useStore } from 'vuex';
import { getPosts } from '@/lib/api.ts';
import PostCard from '@/components/post-card.vue';
import PostsError from '@/components/posts-error.vue';

const store = useStore();
const { data, error } = await getPosts();
store.commit('setPosts', data.value);
</script>

<template>
  <PostsError v-if="error" />
  <ul
    v-else
    class="grid grid-cols-1 items-stretch gap-4 py-4 sm:grid-cols-2 md:grid-cols-3"
  >
    <PostCard v-for="post in store.state.posts" :post="post" :key="post.id" />
  </ul>
</template>
