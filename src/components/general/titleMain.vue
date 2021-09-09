<template>
  <div class="title">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "titleMain",
  props: {
    title: {
      type: String,
      default: "Foods",
    },
  },
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";
.title {
  color: var(--white);
}
</style>
