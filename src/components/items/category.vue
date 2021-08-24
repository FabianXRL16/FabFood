<template>
  <button class="category">
    <slot />
  </button>
</template>

<script>
export default {
  name: "Category",
  props: {
    category: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";
.category{
    height: 100.8px;    
    width: 100.8px;
    border-radius: 50px;
    display: grid;
    grid-auto-flow: row;
    transform: scale(1);
    transition: .3s;
    border: none;
    background-color: transparent;
    cursor: pointer;
}
.category:hover{
    content: "";
    transform: scale(1.2);
    transition: .3s;
    position: relative;
}
.category:hover::before{
    content: "";
    position: absolute;
    width: 100.8px;
    height: 10px;
    border-radius: 100%;
    bottom: -10px;
    background-color: red;
}
.category img{
    height: 70px;
    margin: auto;
}
.category h3{
    color: var(--white);
    font-size: 16px;
    text-align: center;
    margin: 0;
}
@media (max-width: 820px) {
    .category h3{
        font-size: 14px;
        margin: 0;
    }
}
</style>
