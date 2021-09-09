<template>
  <div class="container">
    <order-details />
    aaaaaa
    <!--<payment />-->
  </div>
</template>

<script>
import orderDetails from "../components/groups/orderDetails.vue";
//import payment from "../components/general/payment.vue";
export default {
  name: "ShoppingCart",
  components: {
    orderDetails,
    //payment
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
