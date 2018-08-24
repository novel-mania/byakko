/* eslint-disable no-param-reassign */
import {
  CHAPTER,
  CHAPTERS,
  CHAPTER_FILTERS_ADD,
} from '../mutation-types';

const mutations = {
  [CHAPTER](state, data) {
    if (data && typeof data === 'object') {
      state.chapter = data;
    }
  },
  [CHAPTERS](state, data) {
    if (data && Array.isArray(data)) {
      state.chapters = data;
    }
  },
  [CHAPTER_FILTERS_ADD](state, data) {
    if (data && typeof data === 'object') {
      const exist = state.filters.findIndex(filter => filter.name === data.name);
      if (exist >= 0) {
        state.filters.splice(exist, 1, data);
      } else {
        state.filters.push(data);
      }
    }
  },
};

const state = {
  chapter: {},
  chapters: [],
  filters: [],
};

export default {
  state,
  mutations,
};
