<template>
  <div class="container__shopping">
    <order-details v-if="mobileTitle" />
    <payment class="payment" />
    <payment v-if="!mobileTitle" @noToShow="mobileTitle = !mobileTitle" />
    <title-payment-mobile
      v-if="mobileTitle"
      class="smallPayment"
      :totalPrice="212.0"
      @toShow="mobileTitle = !mobileTitle"
    />
  </div>
</template>

<script>
import orderDetails from "../components/groups/orderDetails.vue";
import payment from "../components/general/payment.vue";
import TitlePaymentMobile from "../components/general/titlePaymentMobile.vue";
export default {
  name: "ShoppingCart",
  components: {
    orderDetails,
    payment,
    TitlePaymentMobile,
  },
  data() {
    return {
      mobileTitle: true,
    };
  },
};
</script>

<style scoped>
.container__shopping {
  display: grid;
  grid-template-columns: 1fr 450px;
  gap: 20px;
}
.smallPayment {
  display: none;
}
@media (max-width: 1160px) {
  .container__shopping {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .payment {
    display: none;
  }
  .smallPayment {
    display: flex;
  }
}
</style>
