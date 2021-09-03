<template>
  <div class="container__payment">
    Payment
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
}
@media (max-width: 1150px) {
  .container__payment {
      width: 100%;
  }
}
</style>
