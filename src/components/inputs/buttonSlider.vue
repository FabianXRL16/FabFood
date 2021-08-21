<template>
  <button>
    <slot />
  </button>
</template>

<script>
export default {
  name: "buttonSlider",
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";
button {
  background-color: var(--bg-primary);
  height: 25px;
  width:25px;
  border-radius: 12.5px;
  border: none;
  outline: none;
  cursor: pointer;
  display: grid;
  place-content: center;
  transform: scale(.8);
  transition: .3s;
}

button:hover{
  transform: scale(1);
  transition: .3s;
}

button img {
  height: 12px;
}
</style>
