<template>
  <div class="container__img">
    <template  v-if="currentBanner === 1">
      <div class="img img1" v-for="n in 4" :key="n*100"></div>
    </template>
    <template  v-if="currentBanner === 2">
      <div class="img img2" v-for="n in 4" :key="n"></div>
    </template>
    <template  v-if="currentBanner === 3">
      <div class="img img3" v-for="n in 4" :key="n*10"></div>
    </template>
  </div>
</template>

<script>
export default {
  name: "pannerCombo",
  props: {
    currentBanner: {
      type: Number,
      default: 1
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
  cursor: none;
}
.img {
  background-position: center;
  background-size: cover;
  height: 500px;
  border-radius: 5px;
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
  background-image: url("../../assets/img/banner/banner1.jpg");
  transform: scale(0.8);
  transition: 0.3s;
}
.img2:nth-child(2) {
  background-image: url("../../assets/img/banner/banner2.jpg");
  transform: scale(0.9);
  transition: 0.3s;
}
.img2:nth-child(3) {
  background-image: url("../../assets/img/banner/banner3.jpg");
  transform: scale(0.7);
  transition: 0.5s;
}
.img2:nth-child(4) {
  background-image: url("../../assets/img/banner/banner4.jpg");
  transform: scale(0.85);
  transition: 0.3s;
}
.img3:nth-child(1) {
  background-image: url("../../assets/img/banner/banner1.jpg");
  transform: scale(0.8);
  transition: 0.3s;
}
.img3:nth-child(2) {
  background-image: url("../../assets/img/banner/banner2.jpg");
  transform: scale(0.9);
  transition: 0.3s;
}
.img3:nth-child(3) {
  background-image: url("../../assets/img/banner/banner3.jpg");
  transform: scale(0.7);
  transition: 0.5s;
}
.img3:nth-child(4) {
  background-image: url("../../assets/img/banner/banner4.jpg");
  transform: scale(0.85);
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
