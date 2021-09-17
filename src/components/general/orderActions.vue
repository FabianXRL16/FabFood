<template>
  <div class="buttons-group">
    <button-car class="car" @closed="close" />
    <button-primary :title="'Confirm order'" />
  </div>
</template>
<script>
import buttonCar from "../inputs/buttonCar.vue";
import buttonPrimary from "../inputs/buttonPrimary.vue";

export default {
  name: "orderActions",
  components: {
    buttonCar,
    buttonPrimary,
  },
  methods:{
      close(){
        this.$emit("closed")
      }
  }
};
</script>

<style scoped>
.buttons-group {
  display: flex;
  align-items: center;
  gap: 20px;
}
.car{
    margin-top: 2px;
}
</style>
