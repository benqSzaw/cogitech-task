import { useFetch } from '@vueuse/core';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const API_BASE_URL = 'https://jsonplaceholder.typicode.com/posts/';

export const getPosts = () => {
  const { isFetching, error, data } = useFetch<Post[]>(API_BASE_URL)
    .get()
    .json();
  return {
    isFetching,
    error,
    data: data.value,
  };
};
