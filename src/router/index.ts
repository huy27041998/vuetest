import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Home from '@/components/home/Home.vue';

Vue.use(VueRouter)
const PATH = process.env.NODE_ENV === 'production' ? '/vuetest/' : '/';
const routes: Array<RouteConfig> = [
    {
        path: PATH,
        name: 'home',
        component: Home
    },
    {
        path: PATH + '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
