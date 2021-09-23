<template>
  <footer class="containerFooter">
    footerrr
  </footer>
</template>

<script>
export default {
  name: "containerFooter",
};
</script>

<style scoped>
.containerFooter {
  background-color: var(--black);
  color: brown;
  padding: 0 var(--p);
}
@media (max-width: 820px) {
  .containerFooter {
    padding: 0 var(--p-mobile);
  }
}
</style>
