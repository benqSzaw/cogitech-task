<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/volt/Button.vue';
const count = ref(0);
</script>

<template>
  <Button @click="count++">count is {{ count }}</Button>
</template>

<style scoped></style>
