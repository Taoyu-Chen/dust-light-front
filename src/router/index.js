import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/admin',
    name: 'AdminHome',
    component: () => import('../views/administer/home/index.vue')
  },
  {
    path: '/admin/announcement',
    name: 'PublishAnnouncement',
    component: () => import('../views/administer/announcement/index.vue')
  },
  {
    path: '/admin/users',
    name: 'ManageUsers',
    component: () => import('../views/administer/users/index.vue')
  },
  {
    path: '/bp',
    name: 'BPHome',
    component: () => import('../views/businessPeople/home/index.vue')
  },
  {
    path: '/bp/publish',
    name: 'PublishTask',
    component: () => import('../views/businessPeople/publish/index.vue')
  },
  {
    path: '/bp/contact',
    name: 'BPContact',
    component: () => import('../views/businessPeople/contact/index.vue')
  },
  {
    path: '/bp/contact/add',
    name: 'BPAddContact',
    component: () => import('../views/businessPeople/contact/AddContact.vue')
  },
  {
    path: '/bp/my',
    name: 'BPMy',
    component: () => import('../views/businessPeople/my/index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login.vue'),
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next()
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/register/Register.vue'),
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next()
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage;
  (!isLogin && (to.name !== 'Login' && to.name !== 'Register')) ? next({ name: 'Login' }) : next()
})

export default router
