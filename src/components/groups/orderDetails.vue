<template>
  <div class="container__orderDetails">
    <div class="container__cart">
      <cart v-for="n in 10" :key="n" />
    </div>
  </div>
</template>
<script>
import cart from "../items/cart.vue";
export default {
  name: "OrderDetails",
  components: {
    cart,
  },
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";
.container__cart{
  height: calc(100vh - 70px - 110px);
  box-sizing: border-box;
  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 9.5px;
}
.container__cart::-webkit-scrollbar{
  width: 0;
}
@media (max-width: 1160px){
  .container__cart{
    height: calc(100vh - 70px - 180px);
    padding-bottom: 0;
    gap: 13px;
  }
}
</style>
