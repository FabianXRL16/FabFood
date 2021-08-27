<template>
  <div class="foods">
    <card v-for="n in 6" :key="n" />
  </div>
</template>

<script>
import card from "../items/card.vue";
export default {
  name: "Foods",
  components: { card },
  props: {},
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";
.foods {
  padding-bottom: 50px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
@media (max-width: 1000px) {
  .foods {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 820px) {
  .foods {
    padding-bottom: var(--p-mobile);
  }
}
@media (max-width: 520px) {
  .foods {
    margin-bottom: calc(var(--p-mobile)/2);
    grid-template-columns: 1fr;
  }
}
</style>
