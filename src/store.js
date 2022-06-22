import Vue from 'vue'
import Vuex from 'vuex'

import data from '../api/data.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foods: data.foods,
    categories: data.categories,
    combos: data.combos,
    __order: [],
    __countOrder: 0
  },
  getters: {
    newOrder: (state) => state.__order,
    updateCountOrder: (state) => state.__countOrder
  },
  actions: {
    addOrder({ commit }, newOrder) {
      commit('ADD_ORDER', newOrder)
    },
    updateCountOrder({ commit }) {
      commit('UPDATED_COUNT_ORDER')
    },
    deleteOrder({ commit }, id) {
      commit('DELETE_ORDER', id)
    },
    orderCountFood({ commit }, obj) {
      commit('ORDER_COUNT_FOOD', obj)
    },
    addOrderCombo({ commit }, obj) {
      commit('ADD_ORDER_COMBO', obj)
    }
  },
  mutations: {
    ADD_ORDER(state, newOrder) {
      state.__order.push(newOrder)
      let pos = state.foods.findIndex((i) => i.id === newOrder.id)
      state.foods[pos].order = true
    },
    UPDATED_COUNT_ORDER(state) {
      state.__countOrder = state.__order.length
    },
    DELETE_ORDER(state, order) {
      let pos = state.__order.findIndex((i) => i.id === order.id)
      state.__order.splice(pos, 1)
      if(order.type === 'food'){
        let posParent = state.foods.findIndex((i) => i.id === order.id)
        state.foods[posParent].order = false
        state.foods[posParent].count = 1
      }else {
        let posParent = state.combos.findIndex((i) => i.id === order.id)
        state.combos[posParent].order = false
        state.combos[posParent].count = 1
      }
    },
    ORDER_COUNT_FOOD(state, obj) {
      let pos = state.__order.findIndex((i) => i.id === obj.id)
      state.__order[pos].count = state.__order[pos].count + obj.counter
    },
    ADD_ORDER_COMBO(state, newOrder) {
      state.__order.push(newOrder)
      let pos = state.combos.findIndex((i) => i.id === newOrder.id)
      state.combos[pos].order = true
    },
  },
})
