import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/e-commerce/HomeView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/e-commerce/CartView.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('../views/e-commerce/CategoriesView.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/e-commerce/CheckoutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/e-commerce/ContactView.vue')
    },
    {
      path: '/order-summary',
      name: 'order-summary',
      component: () => import('../views/e-commerce/OrderSummaryView.vue')
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('../views/e-commerce/PrivacyPolicyView.vue')

    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/e-commerce/ProductsView.vue')
    },
    {
      path: '/product-category/:category',
      component: () => import('../views/e-commerce/CategoriesView.vue')
    },

  ],
})

export default router
