export default {
  router: {
    base: '/',
    routes: [
      {
        name: 'index',
        path: '/',
        component: 'pages/index.vue'
      },
      {
        name: 'projects',
        path: '/projects',
        component: 'pages/projects.vue'
      },
      {
        name: 'example',
        path: '/example/car',
        component: 'pages/example/car.vue'
      },
    ]
  },
  generate: {
    routes: ['/projects', '/', '/example/car']
  },  
  build: {
    vendor: ['@/plugins/canvas']
  },
  plugins: [
    {
      src: '@/plugins/canvas',
      ssr: false
    }
  ]
};
