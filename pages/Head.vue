<template>
  <header class="nav">
    <a href="//www.yuque.com/mondo/docs" target="_blank">仿如昨日</a>
    <a href="//docs.imondo.cn" target="_blank">Docs</a>
    <a href="//github.com/one-pupil/" target="_blank">GitHub</a>
  </header>
</template>

<script>
export default {
  name: 'MHead'
};
</script>

<style scoped>
.nav {
  height: 45px;
  line-height: 45px;
  text-align: right;
  padding-right: 30px;
}
.nav a {
  font-size: 14px;
  display: inline-block;
  text-decoration: none;
  margin: 0 12px;
  padding: 0 15px;
  color: #314659;
  border-top: 2px solid transparent;
  transition: all 0.3s;
}
.nav a:hover {
  color: #1890ff;
  border-top: 2px solid #1890ff;
}
</style>