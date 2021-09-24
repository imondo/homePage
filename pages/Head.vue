<template>
  <header class="nav">
    <nuxt-link v-if="show" class="logo" to="/">Mondo</nuxt-link>
    <nuxt-link to="/projects/" class="nav-link">ITEMS</nuxt-link>
    <a href="//github.com/imondo/" target="_blank" class="nav-link">GitHub</a>
  </header>
</template>

<script>
export default {
  name: 'MHead',
  props: {
    show: Boolean
  }
};
</script>

<style scoped>
.nav {
  height: 45px;
  line-height: 45px;
  text-align: right;
  padding-right: 30px;
}
.nav .nav-link {
  font-size: 14px;
  display: inline-block;
  text-decoration: none;
  margin: 0 12px;
  padding: 0 15px;
  color: #314659;
  border-top: 2px solid transparent;
  transition: all 0.3s;
}
.nav .nav-link:hover {
  color: #1890ff;
  border-top: 2px solid #1890ff;
}
.logo {
  position: absolute;
  left: 27px;
  top: 0;
  letter-spacing: 1px;
  color: #222;
  font-size: 24px;
  font-weight: normal;
  font-family: PingFangSC-Ultralight, sans-serif;
  text-decoration: none;
}
</style>