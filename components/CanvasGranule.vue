<template>
  <client-only>
    <canvas id="canvas"></canvas>
  </client-only>
</template>

<script>
import { creatInit } from './../utils/canvas';

export default {
  name: 'CanvasGranule',
  mounted() {
    this.$nextTick().then(() => {
      creatInit('canvas');
    });
  }
};
</script>

<style scoped>
canvas {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 98vh;
  z-index: 0;
}
</style>