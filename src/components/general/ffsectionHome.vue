<template>
  <div class="nav">
    <div class="place">
      <img src="../../assets/img/location.svg" alt="" />
      <strong>Chiclayo</strong>
    </div>
    <div class="slogan">
      <h1>Your favorite food at <br />the speed of light</h1>
    </div>
    <search />
  </div>
</template>

<script>
import search from "../inputs/search.vue";
export default {
  name: "ffnav",
  components: {
    search,
  },
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";

.nav {
  width: 100%;
  display: grid;
  align-content: flex-end;
  color: var(--white);
}
.place {
  display: flex;
  align-items: center;
  gap: 10px;
}

.place img {
  height: 25px;
}

.slogan h1 {
  font-size: var(--text-title-1);
  margin: 0 0 15px;
}

@media (max-width: 550px) {
  .nav {
    width: 100%;
  }
  .slogan h1 {
    font-size: var(--text-title-2);
    margin: 0 0 10px;
  }
}
</style>
