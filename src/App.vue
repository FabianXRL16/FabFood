<template>
  <div id="app">
    <ffheader @menuUp="up" class="header" />
    <div class="space"></div>
    <router-view class="container" />
    <upMenu @closeUp="up" v-if="ok" class="menu__up" />
  </div>
</template>

<script>
import ffheader from "./components/general/ffheader.vue";
import upMenu from "./components/general/upMenu.vue";

export default {
  name: "App",
  components: {
    ffheader,
    upMenu,
  },
  data() {
    return {
      ok: false,
    };
  },
  methods: {
    up() {
      this.ok = !this.ok;
    },
  },
};
</script>

<style>
@import "./assets/styles/variables.css";
html,
body {
  margin: 0;
  font-family: var(--font_primary);
  /*background-image: url(./assets/img/background-home.jpg);
  background-size: cover;
  background-position-x: center;
  background-repeat: no-repeat;
  background-attachment: fixed;*/
  background-color: var(--bg-secondary);
  height: 100vh;
}
#app {
  position: relative;
}
.header {
  position: fixed;
  width: 100%;
  box-sizing: border-box;
}
.space {
  height: 70px;
}
.menu__up {
  position: absolute;
  top: 0;
  color: wheat;
  z-index: 12;
}
/*
@media (max-width: 500px) {
  html,
  body {
    background-image: url(./assets/img/background-home-mobile.jpg);
    background-size: cover;
    background-position-x: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
}*/
</style>
