<template>
  <div class="container_wap">
    <div class="left">
      <h1>Mondo</h1>
    </div>
    <div class="right">
      <div class="description">
        <p>一个搬砖工 + 一个BUG创造者 + 一个伪文艺青年</p>
        <p></p>
      </div>
    </div>
    <div class="links">
      <a href="//github.com/one-pupil/vue-template" target="_blank" class="btn">vue-template</a>
      <a href="//one-pupil.github.io/fe-dev-command/" target="_blank" class="btn">fe-dev-command</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Container'
};
</script>

<style scoped>
.container_wap {
  max-width: 960px;
  margin: 0 auto;
  position: relative;
  top: 42%;
  transform: translateY(-45%);
}
.container_wap .left {
  float: left;
  width: 40%;
  position: relative;
}
.container_wap .left h1 {
  letter-spacing: 1px;
  text-align: right;
  padding-right: 50px;
  color: #222;
  margin: -5px 0 0 0;
  font-size: 36px;
  font-weight: normal;
  font-family: PingFangSC-Ultralight, sans-serif;
}

.container_wap .left:after {
  content: '';
  width: 2px;
  background: red;
  height: 100%;
  display: block;
  position: absolute;
  right: 30px;
  top: 0;
}
.container_wap .right {
  float: right;
  width: 60%;
}
.container_wap .right .description {
  padding: 0 20px;
  margin-top: -9px;
  line-height: 1.8;
  font-size: 14px;
  color: #111;
  letter-spacing: 1px;
}
.container_wap .links {
  margin: 80px 20% 0 0;
  clear: both;
  float: right;
}
.container_wap .links a {
  background: #2e95ff;
  color: #fff;
  text-decoration: none;
  letter-spacing: 0.5px;
  font-size: 14px;
  line-height: 18px;
  border-radius: 5px;
  padding: 7px 20px;
  margin: 0 15px;
  display: inline-block;
}
.container_wap .links a:hover {
  background: indianred;
}
.container_wap .btn {
  background: #2e95ff;
  color: #fff;
  text-decoration: none;
  letter-spacing: 0.5px;
  font-size: 14px;
  line-height: 18px;
  border-radius: 5px;
  padding: 7px 20px;
  margin: 0 15px;
  display: inline-block;
}
@media (max-width: 640px) {
  .container_wap .links {
    padding-top: 50px;
    float: unset;
    text-align: center;
  }
  .container_wap .links a {
    margin: 10px 50px;
  }
}
</style>