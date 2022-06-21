import Vue from "vue";
import Vuex from "vuex";

import data from "../api/data.json";

Vue.use(Vuex);

export const state = () => ({
  
});

export default new Vuex.Store({
  state: {
    foods: data.foods,
    categories: data.categories
  },
  ations: {
    
  },
  mutations: {
    
  }
});
