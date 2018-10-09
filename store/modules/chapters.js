/* eslint-disable no-param-reassign */
import {
  CHAPTER,
  CLEAR_CHAPTER,
  CHAPTERS,
  CHAPTER_FILTERS_ADD,
} from '../mutation-types';

const mutations = {
  [CHAPTER](state, data) {
    if (data && typeof data === 'object') {
      state.chapter = data;
    }
  },
  [ADD_CHAPTER](state, novel) {
    state.chapter.id = '';
    state.chapter.novel = novel;
    state.chapter.name = '';
    state.chapter.chapter_num = '';
    state.chapter.content = '';
    state.chapter.translators = [];
    state.chapter.editors = [];
    state.chapter.volume.number = '';
    state.chapter.volume.name = '';
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
