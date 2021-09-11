<template>
  <div class="textFields">
    <label>{{ label }}</label>
    <input type="text" />
  </div>
</template>
<script>
export default {
  name: "textFields",
  props: {
    label: {
      type: String,
      default: "name",
    },
  },
};
</script>
<style scoped>
@import "../../assets/styles/variables.css";
.textFields {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
label {
  color: var(--gray-dark);
}
input {
  height: 40px;
  padding: 0 10px;
  border-radius: 5px;
  background-color: rgba(167,167,167,.4);
  outline: none;
  border: none;
  color: var(--black-ligth);
}
</style>
