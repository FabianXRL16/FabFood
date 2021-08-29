import Vue from 'vue'
import Vuex from 'vuex'

import foods from './modules/foods.js'
import categories from './modules/categories.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{

    },
    mutations:{

    },
    ations:{

    },
    modules:{
        foods, categories
    }
})