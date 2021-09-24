import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6379e592 = () => interopDefault(import('..\\pages\\Container.vue' /* webpackChunkName: "pages_Container" */))
const _6f6e49df = () => interopDefault(import('..\\pages\\Head.vue' /* webpackChunkName: "pages_Head" */))
const _a1c13406 = () => interopDefault(import('..\\pages\\LinksItem.vue' /* webpackChunkName: "pages_LinksItem" */))
const _1fa2abf9 = () => interopDefault(import('..\\pages\\Projects.vue' /* webpackChunkName: "pages_Projects" */))
const _e4599dee = () => interopDefault(import('..\\pages\\example\\car.vue' /* webpackChunkName: "pages_example_car" */))
const _331d13fa = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    component: _6379e592,
    name: "Container"
  }, {
    path: "/Head",
    component: _6f6e49df,
    name: "Head"
  }, {
    path: "/LinksItem",
    component: _a1c13406,
    name: "LinksItem"
  }, {
    path: "/Projects",
    component: _1fa2abf9,
    name: "Projects"
  }, {
    path: "/example/car",
    component: _e4599dee,
    name: "example-car"
  }, {
    path: "/",
    component: _331d13fa,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
