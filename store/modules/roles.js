/* eslint-disable no-param-reassign */
import { ROLE, ROLES } from '../mutation-types';

const mutations = {
  [ROLE](state, data) {
    if (data && typeof data === 'object') {
      state.role = data;
    }
  },
  [ROLES](state, data) {
    if (data && Array.isArray(data)) {
      state.roles = data;
    }
  },
};

const state = {
  role: {
    users: [],
  },
  roles: [],
};

export default {
  state,
  mutations,
};
