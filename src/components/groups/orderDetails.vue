<template>
  <div class="container__orderDetails">
    <titleMain :title="'Shopping Cart'" />
    <div class="container__cart">
      <cart v-for="n in 3" :key="n" />
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
.container__orderDetails {
  width: calc(100vw - 2 * var(--p) - 20px - 400px);
  box-sizing: border-box;
  height: calc(100vh - 70px - 148px);
  overflow-x: auto;
  box-sizing: border-box;
}
.container__cart{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
@media (max-width: 1150px) {
  .container__orderDetails {
    width: 100%;
  }
}
@media (max-width: 820px) {
  .container__orderDetails {
  }
}
</style>
