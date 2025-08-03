import { useFetch } from '@vueuse/core';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
  author: string;
};

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = () =>
  useFetch<Post[]>(`${API_BASE_URL}/posts`, {
    async afterFetch(ctx) {
      ctx.data = await Promise.all(
        ctx.data.map(async (post: Post) => {
          const { data } = await useFetch(
            `${API_BASE_URL}/users/${post.userId}`,
          )
            .get()
            .json();

          return {
            ...post,
            author: data.value?.name || 'Unknown',
          };
        }),
      );
      return ctx;
    },
  })
    .get()
    .json();
