import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '@/views/Index.vue'
import Home from '@/views/Home.vue'
import User from '@/views/User.vue'

Vue.use(VueRouter)


const routes = [
    {
      path: '/',
      component: Index,
      name: 'Index'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/home/user',
          component: User,
          name: 'User'
        }
      ]
    }
]

export default new VueRouter({
    routes,
    mode: 'history'
})