<template>
  <div class="container__orderDetails">
    <titleMain :title="'Shopping Cart'" />
    <div class="container__cart">
      <cart v-for="n in 2" :key="n" />
    </div>
  </div>
</template>
<script>
import titleMain from "../general/titleMain.vue";
import cart from "../items/cart.vue";
export default {
  name: "OrderDetails",
  components: {
    titleMain, cart
  },
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";
</style>
