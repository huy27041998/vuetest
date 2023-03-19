import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Home from '@/components/home/Home.vue';

Vue.use(VueRouter)
const PATH = process.env.NODE_ENV === 'production' ? '/vuetest/' : '/';
const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
    }
]

const router = new VueRouter({
    base: PATH,
    mode: 'history',
    routes
})

export default router
