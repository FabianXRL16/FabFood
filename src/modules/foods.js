import data from "../../api/data.json";

export default({
    namespaced: true,
    state:{
        foods: data.foods
    },
    mutations:{},
    actions:{},
    getters:{}
})
/*
import data from "../../api/data.json";

export default({
    namespaced: true,
    state:{
        _foods: []
    },
    getters:{
        getFoods(state){
            return state._foods;
        }
    },
    actions:{
        loadFoods({commit}){
            commit("SET_FOODS", data.foods)
        }
    },
    mutations:{
        SET_FOODS(state, foods){
            state._foods = foods
        }
    },
})
*/