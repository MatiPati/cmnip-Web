import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import MostUsedNames from './views/MostUsedNames.vue'
import CheckOnChart from './views/CheckOnChart.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: About
        },
        {
            path: '/mostused',
            name: 'most used',
            component: MostUsedNames
        },
        {
            path: '/chart',
            name: 'your name on graph',
            component: CheckOnChart
        }
    ]
});
