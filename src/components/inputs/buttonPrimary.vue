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
    padding: 12px 30px 12px;
    border-radius: 22px;
    color: var(--white);
    font-size: var(--btn-text-primary);
}
</style>
