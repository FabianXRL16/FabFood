<template>
  <div class="containerBottonHome">
    <div class="containerBotton">
      <container-chef />
      <container-footer />
    </div>
  </div>
</template>

<script>
import containerChef from "./containerChef.vue";
import ContainerFooter from "./containerFooter.vue";
export default {
  components: { containerChef, ContainerFooter },
  name: "containerBottonHome",
};
</script>

<style scoped>
.containerBotton {
  position: absolute;
  display: grid;
  grid-template-rows: repeat(2, auto);
  width: 100vw;
  left: 0;
}
</style>
