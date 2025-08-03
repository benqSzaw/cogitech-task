<script setup lang="ts">
import Skeleton from '@/volt/Skeleton.vue';
</script>

<template>
  <ul
    class="grid grid-cols-1 items-stretch gap-4 py-4 sm:grid-cols-2 md:grid-cols-3"
  >
    <li v-for="n in 10" :key="n">
      <Skeleton width="full" height="300px" />
    </li>
  </ul>
</template>
