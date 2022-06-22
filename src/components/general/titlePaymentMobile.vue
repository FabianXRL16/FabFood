<template>
  <div class="title">
    <h1>Costo Total</h1>
    <h2>$. {{ totalPrice }}.00</h2>
    <button class="btn btnPayment" @click="showPayment">
      <i :class="openPayment ? 'fas fa-dollar-sign':'fas fa-times'"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "titlePayment",
  data(){
    return{
      openPayment: true
    }
  },
  computed: {
    totalPrice() {
      let order = this.$store.state.__order
      let price = 0
      order.map((i) => {
        let count = i.count * i.price
        price = price + count
      })
      return price
    }
  },
  methods:{
    showPayment(){
      this.openPayment = !this.openPayment
      this.$emit("show")
    }
  }
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";
.title {
  color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.title h1,
.title h2 {
  margin: 0;
}
.btnPayment {
  display: none;
}
@media (max-width: 1160px) {
  .btnPayment {
    display: block;
    background-color: var(--bg-primary);
    color: var(--white);
    width: 50px;
    height: 50px;
    border-radius: 25px;
    font-size: 30px;
    padding: 8px 0 5px 0;
  }
  .title h1 {
    font-size: 25px;
  }
  .title h2 {
    margin-right: -40px;
  }
}
@media (max-width: 420px) {
  .title h1 {
    font-size: 20px;
  }
  .title h2 {
    margin-right: -20px;
  }
}
</style>
