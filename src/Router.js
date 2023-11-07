import {createRouter, createWebHistory} from "vue-router";
import CochesComponent from './components/CochesComponent.vue';
import DetalleCoche from './components/DetalleCoche.vue';
import CreateCoche from './components/CreateCoche.vue';
import UpdateCoche from './components/UpdateCoche.vue';
import DeleteCoche from './components/DeleteCoche.vue';

const myRoutes =[
    {
        path:"/", component: CochesComponent
    },
    {
        path:"/detalle/:id", component: DetalleCoche
    },
    {
        path:"/create", component: CreateCoche
    },
    {
        path:"/update/:id", component: UpdateCoche
    },
    {
        path:"/delete/:id", component: DeleteCoche
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes:myRoutes
})
export default router;