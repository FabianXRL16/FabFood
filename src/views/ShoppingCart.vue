<template>
  <div class="container container__shopping">
    <order-details />
    <payment class="payment" />
  </div>
</template>

<script>
import orderDetails from "../components/groups/orderDetails.vue";
import payment from "../components/general/payment.vue";
export default {
  name: "ShoppingCart",
  components: {
    orderDetails,
    payment
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.container__shopping{
  display: grid;
  grid-template-columns: 1fr 450px;
  gap: 20px;
}
@media (max-width: 1160px) {
  .container__shopping {
    grid-template-columns: 1fr;
  }
  .payment{
    display: none;
  }
}
</style>
