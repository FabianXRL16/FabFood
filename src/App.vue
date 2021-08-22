<template>
  <div id="app">
    <ffheader />
    <router-view class="content" />
  </div>
</template>

<script>
import ffheader from "./components/general/ffheader.vue"

export default {
  name: 'App',
  components: {
    ffheader
  }
}
</script>

<style>
@import "./assets/styles/variables.css";
html, body{
  margin: 0;
  font-family: var(--font_primary);
  background-image: url(./assets/img/background-home.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  height: 100vh;
}

.content{
    height: calc(100vh - 70px);
}

@media (max-width: 500px) { 
  html, body{
    background-image: url(./assets/img/background-home-mobile.jpg);
    background-size: cover;
    background-position-x: center;
  }
}
</style>
