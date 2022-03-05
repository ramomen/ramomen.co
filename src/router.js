import {createRouter, createWebHashHistory} from 'vue-router'
import Home from './pages/Home.vue'
import Contact from './pages/Contact.vue'


const routes = [
    {
        name:"HomePage",
        component: Home,
        path : "/"
    },
    {
        name:"ContactPage",
        component: Contact,
        path :"/contact"
    }
];

const router = createRouter({
    routes,
    history:createWebHashHistory()
});

export default router;