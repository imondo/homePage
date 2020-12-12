import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _77d26192 = () => interopDefault(import('..\\pages\\Container.vue' /* webpackChunkName: "pages_Container" */))
const _6155a5cc = () => interopDefault(import('..\\pages\\Head.vue' /* webpackChunkName: "pages_Head" */))
const _f9320bb0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Container",
    component: _77d26192,
    name: "Container"
  }, {
    path: "/Head",
    component: _6155a5cc,
    name: "Head"
  }, {
    path: "/",
    component: _f9320bb0,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
