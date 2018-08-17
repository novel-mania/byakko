import Vuex from 'vuex';

import novels from './modules/novels';

import * as actions from './actions';
import * as getters from './getters';

const createStore = () => {
  return new Vuex.Store({
    actions,
    getters,
    modules: {
      novels,
    },
    strict: true,
  });
};

export default createStore
