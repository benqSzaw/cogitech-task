import { createStore } from 'vuex';
import type { Post } from './api.ts';

export interface State {
  posts: Post[];
}

const state: State = {
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

export default createStore<State>({
  state,
  mutations,
});
