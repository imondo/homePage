<template>
  <div class="container_wap">
    <div>
      <div class="left">
        <h1>Mondo</h1>
      </div>
      <div class="right">
        <div class="description">
          <p class="typing">搬砖工 + BUG创造者 + 全干工程师</p>
          <p></p>
        </div>
      </div>
    </div>
    <div class="links">
      <a href="//www.yuque.com/mondo/docs" target="_blank" class="btn"
        >仿如昨日</a
      >
      <a href="//docs.imondo.cn" target="_blank" class="btn">Docs 博客</a>
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
  display: flex;
  justify-content: center;
  clear: both;
  padding: 35px 0 0 0;
}

.container_wap .links .btn {
  text-decoration: none;
  color: #222;
  padding: 10px 35px;
  background: #efefef;
  text-transform: uppercase;
  text-align: center;
  position: relative;
  font-family: 'Oswald';
  margin: 20px;
  font-size: 14px;
  cursor: pointer;
}
.container_wap .links .btn::before {
  content: '';
  position: absolute;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  top: calc(2px / -1);
  left: calc(2px / -1);
  background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#1890ff),
      to(#1890ff)
    ),
    -webkit-gradient(linear, left bottom, left top, color-stop(50%, #1890ff), color-stop(50%, transparent)),
    -webkit-gradient(linear, left bottom, left top, color-stop(50%, #1890ff), color-stop(50%, transparent)),
    -webkit-gradient(linear, left top, right top, from(#1890ff), to(#1890ff)),
    -webkit-gradient(linear, right top, left top, from(#1890ff), to(#1890ff));
  background: linear-gradient(to right, #1890ff 0%, #1890ff 100%),
    linear-gradient(to top, #1890ff 50%, transparent 50%),
    linear-gradient(to top, #1890ff 50%, transparent 50%),
    linear-gradient(to right, #1890ff 0%, #1890ff 100%),
    linear-gradient(to left, #1890ff 0%, #1890ff 100%);
  background-size: 100% 2px, 2px 200%, 2px 200%, 0% 2px, 0% 2px;
  background-position: 50% 100%, 0% 0%, 100% 0%, 100% 0%, 0% 0%;
  background-repeat: no-repeat, no-repeat;
  -webkit-transition: background-position 0.3s ease-in-out,
    background-size 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
  transition: background-position 0.3s ease-in-out,
    background-size 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out, background-position 0.3s ease-in-out,
    background-size 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out, background-position 0.3s ease-in-out,
    background-size 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
  -webkit-transform: scaleX(0) rotate(0deg);
  transform: scaleX(0) rotate(0deg);
  -webkit-transition-delay: 0.6s, 0.3s, 0s;
  transition-delay: 0.6s, 0.3s, 0s;
}

.container_wap .links .btn:hover::before {
  background-size: 200% 2px, 2px 400%, 2px 400%, 55% 2px, 55% 2px;
  background-position: 50% 100%, 0% 100%, 100% 100%, 100% 0%, 0% 0%;
  -webkit-transform: scaleX(1) rotate(0deg);
  transform: scaleX(1) rotate(0deg);
  -webkit-transition-delay: 0s, 0.1s, 0.2s;
  transition-delay: 0s, 0.1s, 0.2s;
}
.container_wap .links .btn:nth-of-type(2)::before {
  -webkit-transform: scaleX(0) rotate(180deg);
  transform: scaleX(0) rotate(180deg);
}

.container_wap .links .btn:nth-of-type(2):hover::before {
  background-size: 200% 2px, 2px 400%, 2px 400%, 55% 2px, 55% 2px;
  background-position: 50% 100%, 0% 100%, 100% 100%, 100% 0%, 0% 0%;
  -webkit-transform: scaleX(1) rotate(180deg);
  transform: scaleX(1) rotate(180deg);
  -webkit-transition-delay: 0s, 0.1s, 0.2s;
  transition-delay: 0s, 0.1s, 0.2s;
}
.typing {
  width: 247px;
  height: 23px;
  border-right: 1px solid transparent;
  animation: typing 4.5s steps(20, end), blink-caret 0.75s steps(2, end) infinite;
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
    width: 247px;
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
    flex-direction: column;
    justify-content: inherit;
    text-align: center;
  }
  .container_wap .links a {
    margin: 10px 50px;
  }
}
</style>
