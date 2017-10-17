import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './app-index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: require('Views/index/index.vue'),
    name: 'index',
    meta: {
      user: true
    }
  }
]

const router = new VueRouter({
  routes
})

module.exports = new Vue({
  el: '#page-home',
  router,
  ...App
})
