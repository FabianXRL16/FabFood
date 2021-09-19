<template>
  <div class="container__img">
    <div class="img" v-for="n in 4" :key="n"></div>
  </div>
</template>

<script>
export default {
  name: "pannerCombo",
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
  box-shadow: rgba(543, 1, 13, 0.2) 0px 50px 100px -20px, rgba(0, 0, 0, 1) 0px 30px 60px -30px;
}
.img:nth-child(1) {
  background-image: url("https://imagens3.ne10.uol.com.br/blogsne10/social1/uploads/2020/12/Uma-noite-de-drinks-%C3%A9-o-ideal-para-comemorar-o-fim-de-ano.jpg");
  transform: scale(0.8);
  transition: .3s;
}
.img:nth-child(2) {
  background-image: url("https://images.unsplash.com/photo-1541832676-9b763b0239ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80");
  transform: scale(0.9);
  transition: .3s;
}
.img:nth-child(3) {
  background-image: url("https://sitquije.com/wp-content/uploads/2017/02/tiramisu.jpg");
  transform: scale(0.7);
  transition: .5s;
}
.img:nth-child(4) {
  background-image: url("https://www.scotsman.com/images-i.jpimedia.uk/imagefetch/https://jpgreatcontent.co.uk/wp-content/uploads/2020/02/Morrisons-Chateaubriand.jpg?width=2048&enable=upscale");
  transform: scale(0.85);
  transition: .3s;
}
.img:nth-child(1):hover, .img:nth-child(2):hover, .img:nth-child(3):hover, .img:nth-child(4):hover{
    transform: scale(1);
    transition: .3s;
}
@media (max-width: 820px) {
  .container__img {
    padding: 0;
  }
}
</style>
