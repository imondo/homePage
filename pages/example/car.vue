<template>
  <section class="login-page">
    <section class="inner">
      <section class="main">
        <p class="method">
          微信扫码访问
        </p>
        <section class="inner invalid">
          <img src="https://imondo.cn/files/carapp.jpg" alt="二维码" />
        </section>
      </section>
      <section class="main">
        <p class="method">
          Android 移动端
          <a
            href="https://pan.baidu.com/s/1p7CLGqLRS-lVxHfyH-iknA"
            target="_blank"
            class="method-tips"
            >提取码：cars</a
          >
          <a
            href="https://pan.baidu.com/s/1p7CLGqLRS-lVxHfyH-iknA"
            target="_blank"
            title="提取码：cars"
          >
            <svg
              t="1609919927194"
              class="app-icon icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1400"
              width="256"
              height="256"
            >
              <path
                d="M512 234.666667c-152.917333 0-277.333333 124.416-277.333333 277.333333s124.416 277.333333 277.333333 277.333333 277.333333-124.416 277.333333-277.333333-124.416-277.333333-277.333333-277.333333m0 597.333333c-176.448 0-320-143.552-320-320S335.552 192 512 192s320 143.552 320 320-143.552 320-320 320"
                fill="#333333"
                p-id="1401"
              ></path>
              <path
                d="M422.293333 422.293333l74.325334 185.813334 15.786666-78.954667a21.290667 21.290667 0 0 1 16.746667-16.725333l78.933333-15.808-185.813333-74.325334zM503.466667 704c-8.661333 0-16.533333-5.248-19.84-13.44l-119.466667-298.666667a21.333333 21.333333 0 0 1 27.776-27.733333l298.666667 119.466667a21.333333 21.333333 0 1 1-3.754667 40.725333l-135.381333 27.093333-27.093334 135.402667a21.376 21.376 0 0 1-20.906666 17.152z"
                fill="#333333"
                p-id="1402"
              ></path>
            </svg>
          </a>
        </p>
        <section class="inner invalid">
          <img src="/cimg/bd.png" alt="二维码" />
        </section>
      </section>
      <img src="/cimg/a.png" alt="书桌" class="decoration" />
    </section>
  </section>
</template>

<script>
export default {
  name: 'Car',
  head() {
    return {
      title: 'Mondo',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '前端，程序' },
        { hid: 'keywords', name: 'keywords', content: '前端，程序' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    };
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: 'PT Sans', 'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial,
    Hiragino Sans GB, Microsoft YaHei, sans-serif;
  -webkit-font-smoothing: antialiased;
  padding: 0;
  margin: 0;
}
.container_project {
  height: 100%;
  background-color: #fdfdfd;
}
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #fff;
}

.login-page .inner {
  display: flex;
  align-items: flex-start;
  position: relative;
}
.login-page .inner .main {
  margin-right: 20px;
  font-size: 24px;
  font-weight: 600;
  color: #191919;
  position: relative;
}
.login-page .inner .main .method {
  position: relative;
  margin-bottom: 50px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  transition: all 0.3s;
}
.method-tips {
  font-size: 11px;
  color: #9b9b9f;
  position: absolute;
  top: 100%;
  left: 0;
  font-weight: 500;
  text-decoration: none;
}
.login-page .invalid img {
  width: 150px;
  height: 150px;
}
.login-page .inner .decoration {
  margin-left: 100px;
  height: 500px;
  transform: scale(1.5);
}
.login-page .inner .main .app-icon {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
}
@media (max-width: 640px) {
  .login-page .inner {
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  .login-page .inner .main {
    margin: 50px 0 0 0;
    font-size: 20px;
  }
  .login-page .inner .decoration {
    margin: 50px 0 0 0;
    width: 80%;
    height: auto;
    transform: scale(1.2);
  }
}
</style>
