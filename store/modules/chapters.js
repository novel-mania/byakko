/* eslint-disable no-param-reassign */
import { CHAPTER, CHAPTERS } from '../mutation-types';

const mutations = {
  [CHAPTER](state, data) {
    if (data && typeof data === 'object') {
      state.chapter = data;
    }
  },
  [CHAPTERS](state, data) {
    if (data && typeof data === 'object' && data.length) {
      state.chapters = data;
    }
  },
};

const state = {
  chapter: {},
  chapters: [],
};

export default {
  state,
  mutations,
};
