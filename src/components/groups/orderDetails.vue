<template>
  <div class="container__orderDetails">
    <div class="container__cart">
      <cart v-for="order in orders" :key="order.id" :order="order"/>
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
  computed:{
    orders() {
      return this.$store.state.__order
    }
  }
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";
.container__cart{
  height: calc(100vh - 70px - 112px);
  box-sizing: border-box;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 9.2px;
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
