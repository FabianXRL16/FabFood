<template>
  <div class="container container__shopping">
    <order-details />
    <payment class="payment" />
    <title-payment class="smallPayment" :totalPrice="212.0" />
  </div>
</template>

<script>
import orderDetails from "../components/groups/orderDetails.vue";
import titlePayment from "../components/general/titlePayment.vue";
import payment from "../components/general/payment.vue";
export default {
  name: "ShoppingCart",
  components: {
    orderDetails,
    payment, titlePayment
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
.paymentMobile{
  display: none;
}
.smallPayment{
    display: none;
  }
@media (max-width: 1160px) {
  .container__shopping {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .payment{
    display: none;
  }
  .smallPayment{
    display: flex;
  }
}
</style>
