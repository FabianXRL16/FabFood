<template>
  <div class="container__orderDetails">
    <back class="title_back" :title="'Shopping Cart'" />
    <div class="container__cart">
      <cart v-for="n in 10" :key="n" />
    </div>
  </div>
</template>
<script>
import back from "../general/back.vue";
import cart from "../items/cart.vue";
export default {
  name: "OrderDetails",
  components: {
    cart, back
  },
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";
.title_back{
  margin: 20px 0;
}
.container__cart{
  height: calc(100vh - 70px - 88px);
  box-sizing: border-box;
  overflow-y: auto;
  padding-bottom: 10px;
}
.container__cart::-webkit-scrollbar{
  width: 0;
}
@media (max-width: 1160px){
  .container__cart{
    height: calc(100vh - 70px - 172px);
    padding-bottom: 0;
  }
}
</style>
