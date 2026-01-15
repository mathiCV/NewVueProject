import { createRouter, createWebHistory } from 'vue-router'
import LibrosView from '@/views/LibrosView.vue'
import NuevoLibroView from '@/views/NuevoLibroView.vue'
import EditarLibroView from '@/views/EditarLibroView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: LibrosView
    },
    {
      path: '/nuevoLibro',
      name: 'nuevoLibro',
      component: NuevoLibroView
    },
    {
      path: '/editarLibro/:id',
      name: 'editarLibro',
      component: EditarLibroView
    }
  ],
})

export default router
