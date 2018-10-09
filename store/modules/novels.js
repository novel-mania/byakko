/* eslint-disable no-param-reassign */
import { NOVEL, CLEAR_NOVEL, NOVELS } from '../mutation-types';

const mutations = {
  [NOVEL](state, data) {
    if (data && typeof data === 'object') {
      state.novel = data;
    }
  },
  [CLEAR_NOVEL](state) {
    state.novel.id = '';
    state.novel.name = '';
    state.novel.slug = '';
    state.novel.sinopse = '';
    state.novel.type = '';
    state.novel.advisory_rating = '';
    state.novel.cover = '';
    state.novel.chapters = [];
    state.novel.authors = [];
    state.novel.categories = [];
    state.novel.alternatives_titles = [];
  },
  [NOVELS](state, data) {
    if (data && Array.isArray(data)) {
      state.novels = data;
    }
  },
};

const state = {
  novel: {},
  novels: [],
};

export default {
  state,
  mutations,
};
