<template>
  <router-link to="/shoppingCart" class="button">
    <div class="count">
      <strong>10+</strong>
    </div>
    <img src="../../assets/img/carrito.png" alt="" />
  </router-link>
</template>

<script>
export default {};
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
