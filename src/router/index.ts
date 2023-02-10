// @ts-ignore
import {createRouter, createWebHistory} from 'vue-router';
import Home from "../view/Home/index.vue";
import Login from "../view/login-reg/index.vue";

const routes: any = [
    {
        path: '/',
        component: Home,
        redirect:"/home",
        children: [
            {
                path: "/home",
                component: () => import("../view/Home/Home/index.vue")
            },
            {
                path: "/album",
                component: () => import("../view/Home/Album/index.vue")
            },
            {
                path: "/brand",
                component: () => import("../view/Home/Brand/index.vue")
            },
        ]
    },
    {
        path: "/login",
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router