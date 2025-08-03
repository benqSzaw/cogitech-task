<script setup lang="ts">
import { useStore } from 'vuex';
import HelloWorld from '@/components/HelloWorld.vue';
import { getPosts } from '@/lib/api.ts';

const store = useStore();
const { data, isFetching, error } = getPosts();
store.commit('setPosts', data);
</script>

<template>
  <p v-if="isFetching">Loading posts...</p>
  <p v-else-if="error">Something go wrong</p>
  <HelloWorld v-else />
</template>

<style scoped></style>
