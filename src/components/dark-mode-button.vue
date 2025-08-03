<script setup lang="ts">
import { useToggle, useDark } from '@vueuse/core';
import Button from '@/volt/Button.vue';
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <Button
    size="small"
    :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
    aria-label="Toggle theme"
    @click="toggleDark()"
  />
</template>
