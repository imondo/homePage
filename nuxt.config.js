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
        component: 'pages/Projects.vue'
      }
    ]
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
