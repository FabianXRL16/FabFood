import Vue from "vue";
import Vuex from "vuex";

import data from "../api/data.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    foods: data.foods,
    categories: data.categories,
    __order: [],
    __countOrder: 0
  },
  getters: {
    newOrder: (state) => state.__order,
    updateCountOrder: (state) => state.__countOrder
  },
  actions: {
    addOrder({ commit }, newOrder) {
      console.log(newOrder)
      commit("ADD_ORDER", newOrder);
    },
    updateCountOrder({ commit }) {
      commit("UPDATED_COUNT_ORDER");
    },
  },
  mutations: {
    ADD_ORDER(state, newOrder) {
      state.__order.push(newOrder)
    },
    UPDATED_COUNT_ORDER(state) {
      state.__countOrder = state.__order.length
    }
  }
});
