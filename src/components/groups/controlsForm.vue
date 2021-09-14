<template>
  <div class="controlsForm">
    <button class="btn btnReset" type="reset">
      <i class="fas fa-redo-alt"></i>
    </button>
    <input class="btn stepNext" type="submit" :value="text" />
  </div>
</template>

<script>
export default {
  name: "controlsForm",
  props: {
    text: {
      type: String,
      default: "Next",
    },
  },
  components: {},
};
</script>

<style scoped>
.controlsForm {
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 20px;
  margin-top: 20px;
}
.btnReset {
  border-radius: 5px;
  background-color: #00aeff;
}
.btnReset i {
  color: var(--white);
  font-size: 20px;
}

@media (max-width: 550px) {
  .controlsForm{
    margin-top: 10px;
    gap: 15px;
  }
}
</style>
