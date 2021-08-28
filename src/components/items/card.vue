<template>
  <div class="card" :style="`background-image: url(${url});`">
    <div class="card__container">
      <div class="price">
        $12.00
      </div>
      <div class="mainData">
        <h2 class="title">Name Food</h2>
        <div class="count">
          <div>
            <i class="far fa-star" v-for="n in score" :key="n"></i>
            <i class="far fa-star gray" v-for="m in (5-score)" :key="m*10"></i>
          </div>
          <div>
            <button class="countSymbol">Order now</button>
          </div>
        </div>
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
      score: 2,
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
  border-radius: 8px;
  transition: 0.5s;
  border-bottom: 8px solid var(--bg-primary);
}
.card:hover{
  transition: 0.5s;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.card__container {
  background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,1) 12%, rgba(255,255,255,0) 49%, rgba(255,255,255,0) 78%, rgba(0,0,0,1) 100%);;
  border-radius: 8px 8px 0 0;
  height: 100%;
  transition: 0.5s;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
}
.card__container:hover{
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 8px 8px 0 0;
}
.price {
  margin-left: auto;
  background-color: var(--gray-dark);
  font-family: var(--font_primary);
  width: 80px;
  padding: 5px;
  text-align: center;
  border-radius: 40px;
  color: var(--white);
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
.mainData .title {
  margin: 0;
  color: var(--white);
  font-family: var(--font_primary);
}
.mainData .count {
  display: flex;
  justify-content: space-between;
}
.fa-star {
  color: var(--bg-yellow);
}
.gray{
  color: var(--gray-ligth);
}
.countSymbol{
  outline: none;
  border: none;
  width: 120px;
  height: 30px;
  border-radius: 20px;
  background-color: var(--bg-primary);
  cursor: pointer;
  color: var(--white);
  font-family: var(--font_primary);
}
@media (max-width: 820px) {
  .card {
    height: 200px;
  }
}
</style>
