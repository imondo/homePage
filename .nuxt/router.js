import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _52fed5b0 = () => interopDefault(import('../pages/Container.vue' /* webpackChunkName: "pages/Container" */))
const _a3dc96ee = () => interopDefault(import('../pages/Head.vue' /* webpackChunkName: "pages/Head" */))
const _6500d4f7 = () => interopDefault(import('../pages/LeaveIcon.vue' /* webpackChunkName: "pages/LeaveIcon" */))
const _7c3b6099 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/Container",
      component: _52fed5b0,
      name: "Container"
    }, {
      path: "/Head",
      component: _a3dc96ee,
      name: "Head"
    }, {
      path: "/LeaveIcon",
      component: _6500d4f7,
      name: "LeaveIcon"
    }, {
      path: "/",
      component: _7c3b6099,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
