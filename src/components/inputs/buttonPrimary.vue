<template>
  <button v-text="title" />
</template>

<script>
export default {
  name: "ButtonPrimary",
  props: {
    title: {
      type: String,
      default: ""
    }
  },
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";
button{
    background-color: var(--bg-primary);
    border: 1px solid transparent;
    width: 160px;
    height: 40px;
    display: grid;
    place-content: center;
    border-radius: 22px;
    color: var(--white);
    font-size: var(--btn-text-primary);
    cursor: pointer;
}
button:hover{
  background-color: var(--white);
  color: var(--bg-primary);
  transition: .2s;
  font-weight: 700;
}
</style>
