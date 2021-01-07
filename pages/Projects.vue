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
</style>
