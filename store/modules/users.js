/* eslint-disable no-param-reassign */
import { USER, USERS } from '../mutation-types';

const mutations = {
  [USER](state, data) {
    if (data && typeof data === 'object') {
      state.user = data;
    }
  },
  [USERS](state, data) {
    if (data && Array.isArray(data)) {
      state.users = data;
    }
  },
};

const state = {
  user: {},
  users: [],
};

export default {
  state,
  mutations,
};
