<template>
  <button class="btn button" @click="closeUp">
    <router-link to="/shoppingCart" class="button">
      <div class="count">
        <strong>{{ countOrder }}</strong>
      </div>
      <img src="../../assets/img/carrito.png" alt="" />
    </router-link>
  </button>
</template>

<script>
export default {
  name: "buttonCar",
  computed: {
    countOrder() {
      return this.$store.state.__countOrder > 10 
        ? '+10' 
        : this.$store.state.__countOrder
    }
  },
  methods: {
    closeUp() {
      this.$emit("closed")
    }
  },
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";

.button {
  background-color: transparent;
  border: none;
  position: relative;
  cursor: pointer;
  display: grid;
  place-content: center;
}

.count {
  position: absolute;
  color: var(--white);
  background-color: var(--bg-primary);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  right: 0;
  display: grid;
  place-items: center;
  font-size: 10px;
  font-family: popinsLight;
}

.button img {
  height: 30px;
}
</style>
