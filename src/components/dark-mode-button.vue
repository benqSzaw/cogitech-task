<script setup lang="ts">
import { useToggle, useDark } from '@vueuse/core';
import Button from '@/volt/Button.vue';
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <Button size="small" @click="toggleDark()">
    {{ isDark ? 'Light' : 'Dark' }}
  </Button>
</template>
