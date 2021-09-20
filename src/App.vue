<template>
  <div id="app" :class="this.$route.path === '/' ? 'found' : 'foundNotHome'">
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
  background-repeat: no-repeat;
}
#app {
  position: relative;
}
.found{
  background-image: url("./assets/img/wallpaperHome.png");
  background-position: center;
  background-size: cover;
  height: 100vh;
}
.foundNotHome{
  background-attachment: fixed;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 45%,
    rgba(50, 1, 13, 1) 84%,
    rgba(50, 1, 13, 1) 100%
  );
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
</style>
