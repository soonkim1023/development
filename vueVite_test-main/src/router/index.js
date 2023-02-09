import { createWebHistory, createRouter } from "vue-router";

import Home from '@/components/HelloWorld.vue';
import If from '@/components/ifSample/if.vue';

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/if",
        name: "if",
        component: If,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;