import Vuex from 'vuex';

import novels from './modules/novels';
import chapters from './modules/chapters';
import users from './modules/users';
import roles from './modules/roles';

import * as actions from './actions';
import * as getters from './getters';

const createStore = () => {
  return new Vuex.Store({
    actions,
    getters,
    modules: {
      novels,
      chapters,
      users,
      roles,
    },
    strict: true,
  });
};

export default createStore
