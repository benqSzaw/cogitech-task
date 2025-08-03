<script setup lang="ts">
import type { Post } from '@/lib/api.ts';
import Card from '@/volt/Card.vue';
import Button from '@/volt/Button.vue';

const { post } = defineProps<{ post: Post }>();
</script>

<template>
  <li>
    <Card>
      <template #title>{{ post.title }}</template>
      <template #subtitle>{{ post.author }}</template>
      <template #content>
        <p>
          {{ post.body }}
        </p>
      </template>
      <template #footer>
        <div class="flex flex-1 gap-4 self-end justify-self-end">
          <Button label="Delete" size="small" variant="outlined" />
        </div>
      </template>
    </Card>
  </li>
</template>
