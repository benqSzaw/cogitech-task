<script setup lang="ts">
import { useStore } from 'vuex';
import { getPosts } from '@/lib/api.ts';
import PostCard from '@/components/post-card.vue';
import PostsError from '@/components/posts-error.vue';
import DataView from '@/volt/DataView.vue';

const store = useStore();
const { data, error } = await getPosts();
store.commit('setPosts', data.value);

function onPageChange() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
</script>

<template>
  <PostsError v-if="error" />
  <DataView
    v-else
    :value="store.state.posts"
    :paginator="true"
    :rows="10"
    layout="grid"
    @page="onPageChange"
  >
    <template #header>
      <div class="flex justify-end">
        <p>{{ store.state.posts.length }} posts</p>
      </div>
    </template>
    <template #grid="slotProps">
      <div
        class="grid grid-cols-1 items-stretch gap-4 py-4 sm:grid-cols-2 md:grid-cols-3"
      >
        <PostCard v-for="post in slotProps.items" :post="post" :key="post.id" />
      </div>
    </template>
  </DataView>
</template>
