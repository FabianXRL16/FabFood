<template>
  <div class="container">
      <order-details />
      <payment />
  </div>
</template>

<script>
import orderDetails from "../components/groups/orderDetails.vue";
import payment from "../components/general/payment.vue";
export default {
  name: "ShoppingCart",
  components: {orderDetails, payment},
  data(){
      return{

      }
  }
};
</script>

<style scoped>
.container {
  padding: var(--p-main);
  box-sizing: border-box;
  display: flex;
  gap: 20px;
  justify-content: space-between;
}
@media (max-width: 1150px){
    .container{
        flex-direction: column;
    }
}
@media (max-width: 820px) {
  .container {
    padding: var(--p-main-mobile);
  }
}
</style>
