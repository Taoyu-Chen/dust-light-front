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
    name: 'AboutMe',
    component: () => import('../views/common/AboutMe.vue')
  },
  {
    path: '/setting',
    name: 'AccountSetting',
    component: () => import('../views/common/AccountSetting.vue')
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
    component: () => import('../views/businessPeople/Publish.vue')
  },
  {
    path: '/bp/contact',
    name: 'BPContact',
    component: () => import('../views/businessPeople/contact/ContactBook.vue')
  },
  {
    path: '/bp/contact/add',
    name: 'BPAddContact',
    component: () => import('../views/businessPeople/contact/AddContact.vue')
  },
  {
    path: '/bp/tasklist',
    name: 'BPTaskList',
    component: () => import('../views/businessPeople/contact/ContactBook.vue')
  },
  {
    path: '/bp/task',
    name: 'BPTask',
    component: () => import('../views/businessPeople/task/index.vue')
  },
  {
    path: '/bp/tasks',
    name: 'BPTasks',
    component: () => import('../views/businessPeople/Tasks.vue')
  },
  {
    path: '/bp/my',
    name: 'BPMy',
    component: () => import('../views/businessPeople/my/index.vue')
  },
  {
    path: '/fd',
    name: 'FDHome',
    component: () => import('../views/freelancerDesigner/home/index.vue')
  },
  {
    path: '/fd/bid',
    name: 'BidTask',
    component: () => import('../views/freelancerDesigner/bid/index.vue')
  },
  {
    path: '/fd/contact',
    name: 'FDContact',
    component: () => import('../views/freelancerDesigner/contact/ContactBook.vue')
  },
  {
    path: '/fd/contact/add',
    name: 'FDAddContact',
    component: () => import('../views/freelancerDesigner/contact/AddContact.vue')
  },
  {
    path: '/fd/my',
    name: 'FDMy',
    component: () => import('../views/freelancerDesigner/my/index.vue')
  },
  {
    path: '/fd/history_order',
    name: 'HistoryOrder',
    component: () => import('../views/freelancerDesigner/historyOrder/index.vue')
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
