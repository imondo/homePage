<template>
  <header class="nav">
    <a href="//imondo.cn/rtblog/" target="_blank">blog</a>
    <a href="//github.com/one-pupil/" target="_blank">github</a>
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
  font-size: 13px;
  display: inline-block;
  text-decoration: none;
  margin: 0 12px;
  color: #fff;
}
</style>