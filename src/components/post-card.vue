<script setup lang="ts">
import type { Post } from '@/lib/api.ts';
import Card from '@/volt/Card.vue';
import Button from '@/volt/Button.vue';
import { ref } from 'vue';

const { post } = defineProps<{ post: Post }>();
const isFullBody = ref<boolean>(false);

function toggleBody() {
  isFullBody.value = !isFullBody.value;
}
function truncateString(str: string, maxLength: number) {
  if (str.length <= maxLength) return str;
  return str.substring(0, str.lastIndexOf(' ', maxLength));
}
</script>

<template>
  <li>
    <Card>
      <template #title>{{ post.title }}</template>
      <template #subtitle>{{ post.author }}</template>
      <template #content>
        <p>
          {{ isFullBody ? post.body : truncateString(post.body, 100) }}
        </p>
      </template>
      <template #footer>
        <div class="flex flex-1 gap-4 self-end justify-self-end">
          <Button
            :label="isFullBody ? 'Show Less' : 'Show More'"
            size="small"
            variant="text"
            @click="toggleBody"
          />
          <Button label="Delete" size="small" variant="outlined" />
        </div>
      </template>
    </Card>
  </li>
</template>
