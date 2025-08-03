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
    state.posts = state.posts.filter(post => post.id !== id);
  },
};

const actions = {
  setPosts({ commit }: { commit: Function }, posts: Post[]) {
    commit('setPosts', posts);
  },
  deletePost({ commit }: { commit: Function }, id: number) {
    commit('deletePost', id);
  },
};

export default createStore<State>({
  state,
  mutations,
  actions,
});
