<template>
  <div class="title">
    <h1>Costo Total</h1>
    <h2>$. {{ totalPrice }}.00</h2>
  </div>
</template>

<script>
export default {
  name: "titlePayment",
  props: {
    totalPrice: {
      type: Number,
      default: 0.0,
    },
  },
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";
.title {
  color: var(--white);
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.title h1, .title h2 {
  margin: 0;
}
</style>
