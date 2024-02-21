<template>
  <div id="app">
    <mainPage class="w-100pre h-100pre" msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import mainPage from "./components/index.vue";
// import autofit from "autofit.js";
export default {
  name: "app",
  components: {
    mainPage,
  },

  mounted() {
    // autofit.init({
    //   designHeight: 1080, //设计稿的高度，默认是 929 ，如果项目以全屏展示，则可以设置为1080
    //   // designWidth: 1920, //设计稿的宽度，默认是 1920
    //   renderDom: "#app", //渲染的dom，默认是 "#app"，必须使用id选择器
    //   resize: true, //是否监听resize事件，默认是 true
    // });
  },
};
</script>

<style lang="scss">
@import "./common/publicCssPC.css";
@import "./common/publicScssPC.scss";
@import "./common/font.css";
/* 自定义字体引入 */

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
* {
  padding: 0;
  margin: 0;
}
</style>
