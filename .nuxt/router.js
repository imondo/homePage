import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _33ea3453 = () => interopDefault(import('..\\pages\\Container.vue' /* webpackChunkName: "pages_Container" */))
const _c873f304 = () => interopDefault(import('..\\pages\\Head.vue' /* webpackChunkName: "pages_Head" */))
const _7f8fb4be = () => interopDefault(import('..\\pages\\LinksItem.vue' /* webpackChunkName: "pages_LinksItem" */))
const _ab05fdd0 = () => interopDefault(import('..\\pages\\Projects.vue' /* webpackChunkName: "pages_Projects" */))
const _69a042b0 = () => interopDefault(import('..\\pages\\example\\car.vue' /* webpackChunkName: "pages_example_car" */))
const _45114d44 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    component: _33ea3453,
    name: "Container"
  }, {
    path: "/Head",
    component: _c873f304,
    name: "Head"
  }, {
    path: "/LinksItem",
    component: _7f8fb4be,
    name: "LinksItem"
  }, {
    path: "/Projects",
    component: _ab05fdd0,
    name: "Projects"
  }, {
    path: "/example/car",
    component: _69a042b0,
    name: "example-car"
  }, {
    path: "/",
    component: _45114d44,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
