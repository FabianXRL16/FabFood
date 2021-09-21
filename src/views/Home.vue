<template>
  <div class="container__home">
    <panner-home />
    <div class="onda" style="height: 150px; overflow: hidden;">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style="height: 100%; width: 100%;"
      >
        <path
          d="M0.00,49.99 C150.00,150.00 349.20,-49.99 500.00,49.99 L500.00,150.00 L0.00,150.00 Z"
          style="stroke: none; fill: #f20746;"
        ></path>
      </svg>
    </div>
    <container-info-principles />
  </div>
</template>

<script>
import ContainerInfoPrinciples from "../components/general/containerInfoPrinciples.vue";
import PannerHome from "../components/general/pannerHome.vue";
export default {
  name: "Home",
  components: { PannerHome, ContainerInfoPrinciples },
  data() {
    return {};
  },
};
</script>

<style scoped>
.container__home {
  overflow-x: auto;
  position: relative;
}
.container__home::-webkit-scrollbar {
  width: 0;
}
.onda {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 60px;
}
@media (max-width: 920px) {
  .onda {
    bottom: -30px;
  }
}
@media (max-width: 820px) {
  .onda {
    bottom: 10px;
  }
}
</style>
