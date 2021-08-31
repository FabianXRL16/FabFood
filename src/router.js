import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import FindFood from '@/views/FindFood.vue'
import Error from '@/views/Error.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/findfood',
            name: 'findFood',
            component: FindFood
        },
        {
            path: '*',
            name: Error,
            component: Error
        }
    ]
})