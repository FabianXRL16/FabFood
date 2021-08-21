<template>
  <div id="app">
    <loyout />
  </div>
</template>

<script>
import loyout from '@/components/Loyout.vue'

export default {
  name: 'App',
  components: {
    loyout
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

@media (max-width: 500px) { 
  html, body{
    background-image: url(./assets/img/background-home-mobile.jpg);
    background-size: cover;
    background-position-x: center;
  }
}
</style>
