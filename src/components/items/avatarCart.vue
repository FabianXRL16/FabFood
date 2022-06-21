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
  props: {
    img: {
      type: String,
      default: ''
    }
  },
  data(){
    return{}
  }
};
</script>
<style scoped>
.img{
    height: 80px;
    width: 80px;
    border-radius: 15px;
    background-position: center;
    background-size: cover;
}
</style>