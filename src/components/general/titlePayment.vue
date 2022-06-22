<template>
  <div class="title">
    <h1>Costo Total</h1>
    <h2>$. {{ totalPrice }}.00</h2>
    <button class="btn btnPayment" @click="closed">
      <i class="fas fa-times"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "titlePayment",
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
    closed(){
      this.$emit("close")
    }
  }
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
.title h1,
.title h2 {
  margin: 0;
}
.btnPayment {
  display: none;
}
@media (max-width: 1160px) {
  .title {
    margin-bottom: 25px;
  }
  .btnPayment {
    display: block;
    background-color: var(--bg-primary);
    color: var(--white);
    width: 30px;
    height: 30px;
    border-radius: 15px;
    font-size: 20px;
    padding: 4px 0 5px 0;
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
