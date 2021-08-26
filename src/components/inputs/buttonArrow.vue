<template>
  <button :class="typeBtn ? 'button' : 'button_otuline'">
    <slot />
  </button>
</template>

<script>
export default {
  name: "buttonSlider",
  props: {
    typeBtn: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";
.button {
  background-color: var(--bg-primary);
  height: 25px;
  width: 25px;
  border-radius: 12.5px;
  border: none;
  outline: none;
  cursor: pointer;
  display: grid;
  place-content: center;
  transform: scale(0.8);
  transition: 0.3s;
  cursor: pointer;
}

.button:hover {
  transform: scale(1);
  transition: 0.3s;
}

.button img {
  height: 12px;
}

.button_otuline img {
  height: 16px;
}

.button_otuline {
  background: transparent;
  cursor: pointer;
  width: auto;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  gap: 20px;
}

.label {
  text-decoration: none;
  font-size: 18px;
  color: var(--white);
}

@media (max-width: 820px) {
  .label {
    text-decoration: none;
    display: none;
  }
  .button_otuline {
    padding: 0;
    width: 12.33px;
    border: none;
    outline: none;
  }
  .button_otuline img {
    height: 20px;
  }
}
</style>
