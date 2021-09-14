<template>
  <div class="back__container">
    <button-arrow :typeBtn="typeBtn">
      <template>
        <img src="../../assets/img/arrowLeft.png" alt="Back Page" />
        <strong class="label">
          Back
        </strong>
      </template>
    </button-arrow>
    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<script>
import ButtonArrow from "../inputs/buttonArrow.vue";
export default {
  name: "Back",
  props: {
    title: {
      type: String,
      default: "Find Food",
    },
  },
  components: { ButtonArrow },
  data() {
    return {
      typeBtn: false,
    };
  },
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";
.back__container {
  margin: 0;
  display: grid;
  grid-template-columns: 100px 1fr 100px;
  place-content: center;
}
.title {
  margin: 0;
  color: var(--white);
  text-align: center;
}
@media (max-width: 475px) {
  .title {
    font-size: 25px;
  }
  .back__container {
    margin: 0;
    display: grid;
    grid-template-columns: 10px 1fr 10px;
  }
}
</style>
