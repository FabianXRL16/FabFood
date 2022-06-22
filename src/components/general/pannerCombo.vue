<template>
  <div class="container__img">
    <template  v-if="currentBanner === 0">
      <div class="img img1" v-for="n in $store.state.combos[0].foods" :key="n.id"></div>
    </template>
    <template  v-if="currentBanner === 1">
      <div class="img img2" v-for="m in $store.state.combos[1].foods" :key="m.id"></div>
    </template>
    <template  v-if="currentBanner === 2">
      <div class="img img3" v-for="j in $store.state.combos[2].foods" :key="j.id"></div>
    </template>
  </div>
</template>

<script>
export default {
  name: "pannerCombo",
  props: {
    currentBanner: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style scoped>
.container__img {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  padding: 0 50px;
  /* cursor: none; */
}
.img {
  background-position: center;
  background-size: cover;
  height: 500px;
  border-radius: 8px;
  box-shadow: rgba(543, 1, 13, 0.5) 0px 50px 100px -20px,
    rgba(0, 0, 0, 1) 0px 30px 60px -30px;
}
.img1:nth-child(1) {
  background-image: url("../../assets/img/banner/banner1.jpg");
  transform: scale(0.8);
  transition: 0.3s;
}
.img1:nth-child(2) {
  background-image: url("../../assets/img/banner/banner2.jpg");
  transform: scale(0.9);
  transition: 0.3s;
}
.img1:nth-child(3) {
  background-image: url("../../assets/img/banner/banner3.jpg");
  transform: scale(0.7);
  transition: 0.5s;
}
.img1:nth-child(4) {
  background-image: url("../../assets/img/banner/banner4.jpg");
  transform: scale(0.85);
  transition: 0.3s;
}
.img2:nth-child(1) {
  background-image: url("../../assets/img/banner/banner5.jpg");
  transform: scale(0.9);
  transition: 0.3s;
}
.img2:nth-child(2) {
  background-image: url("../../assets/img/banner/banner6.jpg");
  transform: scale(0.66);
  transition: 0.3s;
}
.img2:nth-child(3) {
  background-image: url("../../assets/img/banner/banner7.jpg");
  transform: scale(0.85);
  transition: 0.5s;
}
.img2:nth-child(4) {
  background-image: url("../../assets/img/banner/banner8.jpg");
  transform: scale(0.75);
  transition: 0.3s;
}
.img3:nth-child(1) {
  background-image: url("../../assets/img/banner/banner9.jpg");
  transform: scale(0.77);
  transition: 0.3s;
}
.img3:nth-child(2) {
  background-image: url("../../assets/img/banner/banner10.jpg");
  transform: scale(0.85);
  transition: 0.3s;
}
.img3:nth-child(3) {
  background-image: url("../../assets/img/banner/banner11.jpg");
  transform: scale(0.7);
  transition: 0.5s;
}
.img3:nth-child(4) {
  background-image: url("../../assets/img/banner/banner12.jpg");
  transform: scale(0.9);
  transition: 0.3s;
}
.img:nth-child(1):hover,
.img:nth-child(2):hover,
.img:nth-child(3):hover,
.img:nth-child(4):hover {
  transform: scale(1);
  transition: 0.3s;
  box-shadow: rgba(0, 0, 0, 0.8) 0px 50px 100px -20px,
    rgba(0, 0, 0, 1) 0px 30px 60px -30px;
}
@media (max-width: 820px) {
  .container__img {
    padding: 0;
  }
  .img {
    box-shadow: rgba(543, 1, 13, 1) 0px 50px 100px -20px,
      rgba(0, 0, 0, 1) 0px 30px 60px -30px;
    height: 450px;
  }
}
</style>
