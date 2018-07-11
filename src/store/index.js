import Vue from 'vue';
import Vuex from 'vuex';

import example from './module-example';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    stringFromStore: 'string from store',
  },
  modules: {
    example,
  },
});

export default store;
