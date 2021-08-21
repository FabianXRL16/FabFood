<template>
  <div class="slider">
    <div class="cards">
      <card v-for="food in foods" :key="food.id" :data="food" />
    </div>
    <actions />
  </div>
</template>

<script>
import card from "../general/card.vue";
import actions from "./actions.vue"
export default {
  name: "Card",
  components: { card, actions },
  props: {
    foods: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";
.cards {
  padding-top: 50px;
  display: flex;
}
</style>
