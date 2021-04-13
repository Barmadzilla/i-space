import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Finances from "@/views/Finances";
import News from "@/views/News";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/it-support',
        name: 'It Support',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/ItSupport.vue')
    },
    {
        path: '/i-legal',
        name: 'i-Legal',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/iLegal.vue')
    },
    {
        path: '/finances',
        name: 'Finances',
        component: Finances,
    },
    {
        path: '/offices',
        name: 'Offices',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Offices.vue')
    },
    {
        path: '/privacy',
        name: 'Privacy',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Privacy.vue')
    },
    {
        path: '/news/:id',
        name: 'News',
        component: News,
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,

})

export default router
