import DesktopLayout from '@/components/layout/DesktopLayout.vue'
import LoginLayout from '@/components/layout/LoginLayout.vue'
import { RouteName } from '@/enums/RouteName.ts'
import DashboardView from '@/views/DashboardView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DesktopLayout,
      children: [
        {
          path: '',
          name: RouteName.DASHBOARD,
          component: DashboardView,
        },
        {
          path: 'products',
          name: RouteName.PRODUCTS,
          component: () => import('../views/ProductsListView.vue'),
        },
        {
          path: 'orders',
          name: RouteName.ORDERS,
          component: () => import('../views/OrdersListView.vue'),
        },
        {
          path: 'users',
          name: RouteName.USERS,
          component: () => import('../views/UsersListView.vue'),
        },
        {
          path: 'blog',
          name: RouteName.BLOG,
          component: () => import('../views/BlogPostsListView.vue'),
        },
      ],
    },
    {
      path: '/login',
      component: LoginLayout,
      children: [
        {
          path: '',
          name: RouteName.LOGIN,
          component: () => import('../views/LoginView.vue'),
        },
      ],
    },
  ],
})

const isAuthenticated = true

router.beforeEach((to) => {
  if (!isAuthenticated && to.name !== RouteName.LOGIN) {
    return { name: RouteName.LOGIN }
  }
})

export default router
