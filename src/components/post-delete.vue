<script setup lang="ts">
import { useStore } from 'vuex';
import { useConfirm } from 'primevue/useconfirm';
import { useToast } from 'primevue/usetoast';
import Button from '@/volt/Button.vue';

const { postId } = defineProps<{ postId: number }>();

const store = useStore();
const confirm = useConfirm();
const toast = useToast();

const confirmDelete = () => {
  confirm.require({
    message: 'Are you sure you want to delete that post?',
    header: 'Delete Post',
    rejectProps: {
      label: 'No, keep it',
      severity: 'secondary',
      outlined: true,
    },
    acceptProps: {
      label: 'Yes, delete it',
    },
    accept: () => {
      store.commit('deletePost', postId);
      toast.add({
        severity: 'success',
        summary: 'Post Deleted',
        detail: 'The post has been successfully removed.',
        life: 3000,
      });
    },
  });
};
</script>

<template>
  <Button @click="confirmDelete()" label="Delete" size="small" variant="text" />
</template>
