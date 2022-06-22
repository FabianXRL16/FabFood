<template>
  <div class="orderCombo">
    <p>
      {{combos[currentBanner].description}}
    </p>
    <div class="offer">
      <span>Before <del>${{combos[currentBanner].previousPrice}}.00</del></span>
      <strong>${{combos[currentBanner].price}}.00</strong>
    </div>
    <button class="countSymbol" @click="orderCombo">Order now</button>
  </div>
</template>

<script>
export default {
  name: "orderCombo",
  props: {
    currentBanner: {
      type: Number,
      default: 0
    }
  },
  computed: {
    combos() {
      return this.$store.state.combos
    }
  },
  methods: {
    orderCombo(){
      this.$store.dispatch('addOrder', this.combos[this.currentBanner])
      this.$store.dispatch("updateCountOrder");
    }
  }
};
</script>
<style scoped>
.orderCombo {
  display: flex;
  flex-direction: column;
}
.orderCombo p {
  color: var(--gray-ligth);
  text-align: justify;
  margin-top: 0;
  font-size: var(--text-title-4);
}
.countSymbol {
  outline: none;
  border: none;
  width: 100%;
  height: 40px;
  border-radius: 50px;
  background-color: var(--bg-primary);
  cursor: pointer;
  color: var(--white);
  font-family: var(--font_primary);
  font-size: var(--text-title-4);
  transition: 0.3s;
}
.countSymbol:hover {
  background-color: var(--white);
  color: var(--bg-primary);
  transition: 0.3s;
  font-weight: 700;
}
.offer {
  height: 50px;
  font-size: var(--text-title-3);
  color: var(--bg-yellow);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 32px;
  gap: 30px;
}
strong{
  color: var(--white);
  font-size: var(--text-title-2);
}
@media (max-width: 820px) {
  .countSymbol {
    height: 50px;
  }
  .orderCombo p {
    font-size: var(--text-subtitle-1);
  }
  .offer{
    margin-bottom: 20px;
    font-size: var(--text-title-4);
  }
  strong{
  font-size: var(--text-title-3);
}
}
</style>
