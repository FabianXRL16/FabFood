<template>
  <button class="category">
    <slot />
  </button>
</template>

<script>
export default {
  name: "Category",
  props: {},
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";
.category {
  min-width: 80px;
  height: 100.8px;
  border-radius: 50px;
  display: grid;
  grid-auto-flow: row;
  gap: 10px;
  transform: scale(0.9);
  transition: 0.3s;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
}
.category:hover {
  transform: scale(1.04);
  transition: 0.3s;
}
.category:focus {
  transform: scale(1.04);
  transition: 0.3s;
}
.category img {
  height: 70px;
  margin: auto;
}
.category h3 {
  color: var(--white);
  font-size: 18px;
  text-align: center;
  margin: 0;
}
@media (max-width: 520px) {
  .category {
    min-width: calc(25vw - 20px);
  }
}
@media (max-width: 820px) {
  .category h3 {
    font-size: 14px;
    margin: 0;
  }
}
</style>
