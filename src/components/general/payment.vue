<template>
  <div class="container__payment">
    <div class="">
      <h1>Costo Total:</h1>
      <h2>$200.00</h2>
    </div>
    <div>
      cart
    </div>
  </div>
</template>

<script>
export default {
  name: "Payment",
  components: {},
};
</script>
<style scoped>
@import "../../assets/styles/variables.css";
.container__payment {
  background: #00BF44;
  box-sizing: border-box;
  width: 400px;
  height: 100%;
  position: fixed;
  right: 100px;
}
@media (max-width: 1150px) {
  .container__payment {
      width: 100%;
  }
}
</style>
