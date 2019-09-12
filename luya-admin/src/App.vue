<template>
  <div id="app">
    <router-view v-if="isRouterAlive" />
  </div>
</template>

<script>
export default {
  name: "App",
  // 依赖注入
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true
    };
  },
  methods: {
    // 刷新方法
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>

<style>
/* @import "./assets/css/main.css"; */
@import "./assets/css/theme/index.css";

html,
body {
  height: 100%;
  width: 100%;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
}

/* 进度条颜色 */
#nprogress .bar {
  background: #4b6dff !important;
}
/* 加载小圆圈颜色 */
#nprogress .spinner-icon {
  border-top-color: #4b6dff !important;
  border-left-color: #4b6dff !important;
}
</style>
