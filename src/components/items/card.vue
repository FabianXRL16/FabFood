<template>
  <div class="card" :style="`background-image: url(${url});`">
    <div class="card__container">
      <div class="price">
        $12.00
      </div>
      <div class="mainData">
        Name foods
      </div>
    </div>
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
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px;
  transition: 0.5s;
  border-bottom: 15px solid var(--bg-primary);
}
.card:hover {
  transition: 0.5s;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.card__container {
  height: 100%;
  transition: 0.5s;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
}
.card__container:hover {
  transform: scale(1);
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 15px;
}
.price{
  margin-left: auto;
  background-color: var(--bg-primary);
  width: 80px;
  padding: 5px;
  text-align: center;
  border-radius: 40px;
  color: var(--white);
}
@media (max-width: 820px) {
  .card {
    height: 200px;
  }
}
</style>
