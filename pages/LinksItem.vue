<template>
  <a :href="data.url" target="_blank" class="project-item">
    <h3 class="project-title">{{ data.title }}</h3>
    <div class="project-center">
      <img
        class="project-pic"
        :src="data.img"
        alt=""
      />
      <span class="project-rich-text"
        >{{ data.rich }}</span
      >
    </div>
  </a>
</template>

<script>
export default {
  name: 'LinksItem',
  props: {
    data: Object
  }
};
</script>

<style scoped>
.project-item {
  display: block;
  max-width: 690px;
  border-radius: 20px;
  box-shadow: 2px 2px 20px -1px hsla(0, 0%, 91.4%, 0.31);
  background: #fff;
  padding: 20px 30px;
  margin: 0 auto 18px auto;
  transition: all 0.25s;
  text-decoration: none;
}
.project-item:hover {
  background: #ededef;
}
.project-title {
  width: 27rem;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding-right: 10px;
  font-size: 18px;
  color: #292525;
  font-weight: 600;
  line-height: 1.4;
  text-align: left;
}
.project-center {
  margin-top: 25px;
  display: flex;
  align-items: flex-start;
  position: relative;
}
.project-pic {
  width: 200px;
  height: 110px;
  border-radius: 10px;
  background-color: #f9f9f9;
  -o-object-fit: cover;
  object-fit: cover;
  margin-right: 20px;
  display: block;
  border: 0;
}
.project-rich-text {
  font-size: 14px;
  color: #655e5e;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  text-align: left;
  flex: 1;
  line-height: 1.6;
}
</style>
