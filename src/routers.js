import HomePage from './components/Home.vue'
import SignUp from './components/Signup.vue'
import LoginPage from './components/Login.vue'
import AddPage from './components/Add.vue'
import UpdatePage from './components/Update.vue'
import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    {
        name: 'HomePage',
        path: '/',
        component: HomePage
    },
    {
        name: 'SignUp',
        path: '/signup',
        component: SignUp
    },
    {
        name: 'LoginPage',
        path: '/login',
        component: LoginPage
    },
    {
        name: 'AddPage',
        path: '/add',
        component: AddPage
    },
    {
        name: 'UpdatePage',
        path: '/update/:id?',
        component: UpdatePage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router