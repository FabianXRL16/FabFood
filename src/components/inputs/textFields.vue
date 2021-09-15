<template>
  <div class="textFields">
    <label :for="`i${label.replace(/\s+/g, '')}`">{{ label }}</label>
    <input
      :id="`i${label.replace(/\s+/g, '')}`"
      :type="typeInput"
      :name="label.replace(/\s+/g, '')"
    />
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
    typeInput: {
      type: String,
      default: "text",
    }
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
  background-color: rgba(167, 167, 167, 0.4);
  outline: none;
  border: none;
  color: var(--black-ligth);
}
@media (max-width: 550px){
  label{
    font-size: 14px;
  }
}
</style>
