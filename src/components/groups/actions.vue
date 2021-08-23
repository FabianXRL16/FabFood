<template>
  <div class="actions">
    <buttonSlider >
      <template>
        <img src="../../assets/img/arrowLeft.png" alt="">
      </template>
    </buttonSlider>
    <buttonSlider >
      <template>
        <img src="../../assets/img/arrowRigth.png" alt="">
      </template>
    </buttonSlider>
  </div>
</template>

<script>
import buttonSlider from "../inputs/buttonArrow.vue";

export default {
  name: "actions",
  components: {
    buttonSlider,
  },
};
</script>

<style scoped>
.actions {
  padding-top: 10px;
  display: flex;
  gap: 20px;
}
</style>
