<template>
  <div class="container__shoppingCart">
    <back
      v-if="paymentMobile"
      :title="'Shopping Cart'"
      class="container__back"
    />
    <order-details v-if="paymentMobile" class="container__order" />
    <payment
      :class="paymentMobile ? 'container__payment' : 'container__payment-p '"
    />
    <title-payment-mobile
      class="container__title-payment-mobile"
      @show="paymentMobile = !paymentMobile"
    />
  </div>
</template>

<script>
import payment from "../components/general/payment.vue";
import orderDetails from "../components/groups/orderDetails.vue";
import TitlePaymentMobile from "../components/general/titlePaymentMobile.vue";
import back from "@/components/general/back.vue";
export default {
  name: "ShoppingCart",
  components: {
    back,
    payment,
    orderDetails,
    TitlePaymentMobile,
  },
  data() {
    return {
      paymentMobile: true,
    };
  },
};
</script>

<style scoped>
.container__shoppingCart {
  color: blanchedalmond;
  padding-top: 20px;
  box-sizing: border-box;
  display: grid;
  grid-template-areas:
    "back back"
    "order payment";
  grid-template-columns: 1fr 450px;
  grid-template-rows: 50px 1fr;
  gap: 20px;
}
.container__back {
  grid-area: back;
}
.container__order {
  grid-area: order;
}
.container__payment {
  grid-area: payment;
}
.container__title-payment-mobile {
  grid-area: title;
  display: none;
}
@media (max-width: 1160px) {
  .container__shoppingCart {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .container__title-payment-mobile {
    display: flex;
  }
  .container__payment {
    display: none;
  }
  .container__payment-p {
    display: flex;
  }
}
</style>
