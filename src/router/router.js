import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Details from '../views/Details.vue'

const routes = [
    { 
        path: '/', 
        component: Home ,
        name: 'home'
    },
    {
        path: '/details/:id',
        component: Details,
        name: 'details'
    }
]

const router = createRouter({
    history: createWebHashHistory(),    
    routes,
})

export default router