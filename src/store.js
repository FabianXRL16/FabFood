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
      commit("ADD_ORDER", newOrder);
    },
    updateCountOrder({ commit }) {
      commit("UPDATED_COUNT_ORDER");
    },
    deleteOrder({commit}, id) {
      commit("DELETE_ORDER", id)
    }
  },
  mutations: {
    ADD_ORDER(state, newOrder) {
      state.__order.push(newOrder)
      let pos = state.foods.findIndex(i => i.id === newOrder.id)
      state.foods[pos].order = true
    },
    UPDATED_COUNT_ORDER(state) {
      state.__countOrder = state.__order.length
    },
    DELETE_ORDER(state, id){
      let pos = state.__order.findIndex(i => i.id === id)
      let posParent = state.foods.findIndex(i => i.id === id)
      state.__order.splice(pos, 1)
      state.foods[posParent].order = false
    }
  }
});
