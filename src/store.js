import Vue from "vue";
import Vuex from "vuex";

import foods from "./modules/foods.js";
import categories from "./modules/categories.js";

Vue.use(Vuex);

export const state = () => ({
  _order: [],
});

export default new Vuex.Store({
  state: {
    getOrder(state) {
      return state._order;
    },
  },
  ations: {
    registerOrder({ commit }, order) {
      commit("ADD_FOOD_TO_ORDER", order);
    },
  },
  mutations: {
    ADD_FOOD_TO_ORDER(state, newOrder) {
      state._order.push(newOrder);
    },
  },
  modules: {
    foods,
    categories,
  },
});
