<template>
  <div class="foods">
    <card v-for="food in foods" :key="food.id" :food='food' />
  </div>
</template>

<script>
import card from "../items/card.vue";
export default {
  name: "Foods",
  props: {
    foods:{
      type: Array,
      default: () => []
    }
  },
  components: { card },
  data() {
    return {
    };
  }
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";
.foods {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
@media (max-width: 1000px) {
  .foods {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 520px) {
  .foods {
    margin-bottom: calc(var(--p-mobile) / 2);
    grid-template-columns: 1fr;
  }
}
</style>
