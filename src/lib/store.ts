import { createStore } from 'vuex';
import type { Post } from './api.ts';

export interface State {
  currentPage: number;
  totalPages: number;
  previousPage?: number;
  nextPage?: number;
  posts: Post[];
}

const state: State = {
  currentPage: 1,
  totalPages: 1,
  previousPage: undefined,
  nextPage: undefined,
  posts: [],
};

const mutations = {
  setPosts(state: State, posts: Post[]) {
    state.posts = posts;
  },
  deletePost(state: State, id: number) {
    console.log(state.posts);
    state.posts = state.posts.filter(post => post.id !== id);
    console.log(state.posts);
  },
};

export default createStore<State>({
  state,
  mutations,
});
