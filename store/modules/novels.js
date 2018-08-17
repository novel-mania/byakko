/* eslint-disable no-param-reassign */
import { NOVEL, NOVELS } from '../mutation-types';

const mutations = {
  [NOVEL](state, data) {
    if (data && typeof data === 'object') {
      state.novel = data;
    }
  },
  [NOVELS](state, data) {
    if (data && typeof data === 'object' && data.length) {
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
