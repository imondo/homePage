<template>
  <div class="container_wap">
    <div>
      <div class="left">
        <h1>Mondo</h1>
      </div>
      <div class="right">
        <div class="description">
          <p class="typing">搬砖工 + BUG工程师 + 伪文艺青年</p>
          <p></p>
        </div>
      </div>
    </div>
    <div class="links">
      <a
        href="//one-pupil.github.io/fe-dev-command/"
        target="_blank"
        class="btn"
        >前端命令</a
      >
      <a href="//one-pupil.github.io/js-utils/" target="_blank" class="btn"
        >日常 JS 库</a
      >
      <a href="http://news.imondo.cn/" target="_blank" class="btn"
        >node 小爬虫本地新闻</a
      >
      <a href="//github.com/one-pupil/vue-template" target="_blank" class="btn"
        >Vue 后台管理模板</a
      >
      <a href="//github.com/one-pupil/react-board" target="_blank" class="btn"
        >React 移动端模板</a
      >
      <a href="//one-pupil.github.io/rqk-ui/" target="_blank" class="btn"
        >rqk-ui</a
      >
      <a href="https://imondo.cn/files/carapp.jpg" target="_blank" class="btn"
        >微信小程序【查车牌】</a
      >
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
  padding-right: 5%;
  color: #222;
  margin: -5px 0 0 0;
  font-size: 36px;
  font-weight: normal;
  font-family: PingFangSC-Ultralight, sans-serif;
}

.container_wap .left:after {
  content: '';
  width: 2px;
  background: #eb4d4b;
  height: 100%;
  display: block;
  position: absolute;
  right: 0;
  top: 0;
}
.container_wap .right {
  float: left;
  width: 55%;
}
.container_wap .right .description {
  padding: 0 20px;
  margin-top: 9px;
  line-height: 1.8;
  font-size: 14px;
  color: #111;
  letter-spacing: 1px;
}
.container_wap .links {
  width: 80%;
  margin: 0 auto;
  clear: both;
  padding: 35px 0 0 0;
}
.container_wap .links a {
  position: relative;
  z-index: 1;
  overflow: hidden;
  background: #2e95ff;
  color: #fff;
  text-decoration: none;
  letter-spacing: 0.5px;
  font-size: 14px;
  line-height: 18px;
  border-radius: 0;
  padding: 7px 20px;
  margin: 15px;
  display: inline-block;
}
.container_wap .links a::before {
  z-index: -1;
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: #40a9ff;
  transform-origin: center;
  transform: translate3d(-50%, -50%, 0) scale(0, 0);
  transition: transform .35s ease-in-out;
}
.container_wap .links a:hover::before {
  transform: translate3d(-50%, -50%, 0) scale(15, 15);
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
.typing {
  width: 247px;
  height: 18px;
  border-right: 1px solid transparent;
  animation: typing 4.5s steps(37, end), blink-caret 0.75s step-end infinite;
  font-family: Consolas, Monaco;
  word-break: break-all;
  overflow: hidden;
}
/* 打印效果 */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 340px;
  }
}
/* 光标闪啊闪 */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: currentColor;
  }
}
@media (max-width: 640px) {
  .container_wap .left,
  .container_wap .right {
    float: initial;
    width: 100%;
    text-align: center;
  }
  .container_wap .left:after {
    display: none;
  }
  .container_wap .left h1 {
    text-align: center;
    padding: 0 0 20px 0;
  }
  .typing {
    margin: 0 auto;
  }
  .container_wap .links {
    width: auto;
    margin: 0;
    padding-top: 50px;
    float: unset;
    text-align: center;
  }
  .container_wap .links a {
    margin: 10px 50px;
  }
}
</style>
