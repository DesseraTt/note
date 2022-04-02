import {createRouter, createWebHistory} from "vue-router";
import MainPage from "@/Pages/MainPage";
import AuthorizationPage from "@/Pages/AuthorizationPage";
import RegistrationPage from "@/Pages/RegistrationPage";
const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/authorization',
        component: AuthorizationPage
    },
    {
        path: '/registration',
        component: RegistrationPage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;