import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import Index from '~/page/index.vue'
import NotFound from '~/page/404.vue'
const routes=[
    {
        path:'/',
        component:Index
    },
    { path: '/:pathMatch(.*)*',
     name: 'NotFound',
      component: NotFound 
    },
]
const router=createRouter({
    history:createWebHashHistory(),
    routes
})
export default router