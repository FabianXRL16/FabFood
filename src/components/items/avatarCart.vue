<template>
    <div
      class="img"
      :style='`background-image:url(${img});`'
    ></div>
</template>
<script>
export default {
  name: "AvatarCart",
  components: {},
  data(){
    return{
      img: 'https://barradeideas.com/wp-content/uploads/2019/09/fast-food.jpg'
    }
  }
};
</script>
<style scoped>
.img{
    height: 60px;
    width: 60px;
    border-radius: 15px;
    background-position: center;
    background-size: cover;
}
</style>