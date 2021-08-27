<template>
  <div class="card" :style="`background-image: url(${url});`">
    hola
  </div>
</template>

<script>
export default {
  name: "card",
  props: {},
  components: {},
  data() {
    return {
      url:
        "https://tipsparatuviaje.com/wp-content/uploads/2020/03/desayuno-ingles-completo-1.jpg",
    };
  },
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";
.card {
  background: blue;
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px;
}
@media (max-width: 820px) {
  .card {
    height: 200px;
    border-radius: 20px;
  }
}
</style>
