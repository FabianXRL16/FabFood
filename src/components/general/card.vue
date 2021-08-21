<template>
    <div class="card">
        <img :src="data.img" alt="">
    </div>
</template>

<script>
export default {
  name: "card",
  props: {
      data: {
          type: Object,
          default: () => {}
      }
  }
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";
.card{
    height: 160px;
}

.card img{
    height: 100%;
}
</style>