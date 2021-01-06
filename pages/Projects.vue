<template>
  <div class="warpper">
    <CanvasGranule />
    <MHead class="head" show/>
    <div class="container_wap container_project">
      <div class="project-list">
        <template v-for="(item, index) in list">
          <LinksItem :data="item" :key="index"/>
        </template>
      </div>
      <a
        class="leave"
        href="//github.com/one-pupil/docs/issues/1"
        target="_blank"
      >
        <LeaveIcon />
      </a>
    </div>
  </div>
</template>

<script>
import MHead from './Head';
import LinksItem from './LinksItem';
import LeaveIcon from './../components/LeaveIcon';
import projects from '../config/projects';

export default {
  name: 'Index',
  components: {
    MHead,
    LinksItem,
    LeaveIcon
  },
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
  },
  data() {
    return {
      list: projects
    }
  },
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
.head {
  position: fixed;
  height: 45px;
  width: 100%;
  z-index: 999;
  background: #fdfdfd;
  -webkit-font-smoothing: auto;
  box-shadow: 0 2px 8px #fdfdfd;
}
.container_project {
  height: 100%;
  background-color: #fdfdfd;
}
.project-list {
  padding: 65px 0;
  max-width: 960px;
  margin: 0 auto;
  position: relative;
  background-color: #fdfdfd;
}

.nav_container {
  position: fixed;
  height: 45px;
  width: 100%;
  z-index: 999;
  background: #333;
  -webkit-font-smoothing: auto;
}
.nav_container .nav {
  height: 45px;
  line-height: 45px;
  text-align: right;
  padding-right: 30px;
}
.nav_container .nav a {
  font-size: 13px;
  display: inline-block;
  text-decoration: none;
  margin: 0 12px;
  color: #fff;
}
.nav_container .nav a:hover {
  color: red;
}
.leave {
  position: fixed;
  bottom: 15px;
  right: 15px;
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
</style>
