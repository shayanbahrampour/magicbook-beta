import * as api from '~/server/api/index';
import { createStore } from 'vuex';
const axios = useNuxtApp().$axios;
const store = createStore({
  state: {},
  mutations: {},
  actions: {
    getBooks(ctx, { params } = {}) {
      return axios.get(api.books(), { params });
    }
  }
});

export default store;
