import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'BookTable',
      component: () => import('../views/BookTable.vue')
    },
    {
      path: '/details/:title/:id',
      name: 'BookDetails',
      meta: {
        mode: 'existing'
      },
      component: () => import('../views/BookDetails.vue')
    },
    {
      path: '/new',
      name: 'NewBook',
      meta: {
        mode: 'new'
      },
      component: () => import('../views/BookDetails.vue')
    }
  ]
})

export default router
