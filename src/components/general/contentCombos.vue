<template>
  <div>
    <div class="panner">
      <panner-combo :currentBanner="currentBanner" />
      <buttons-panner @changeBanner="changeBanner" />
    </div>
    <div class="details">
      <list-foods-combo :currentBanner="currentBanner" />
      <order-combo :currentBanner="currentBanner" />
    </div>
  </div>
</template>

<script>
import PannerCombo from "./pannerCombo.vue";
import listFoodsCombo from "./listFoodsCombo.vue";
import OrderCombo from "./orderCombo.vue";
import buttonsPanner from "../groups/buttonsPanner.vue";
export default {
  name: "contentCombos",
  components: {
    PannerCombo,
    listFoodsCombo,
    OrderCombo,
    buttonsPanner,
  },
  data() {
    return {
      currentBanner: 0
    }
  },
  methods: {
    changeBanner(n){
      this.currentBanner = n
    }
  }
};
</script>

<style scoped>
.details {
  color: antiquewhite;
  display: grid;
  grid-template-columns: 1fr 400px;
  background-color: rgba(242, 7, 70, 0.1);
  border-radius: 5px;
  padding: 30px;
  margin-top: 40px;
  gap: 50px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}
@media (max-width: 1180px) {
  .details {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
