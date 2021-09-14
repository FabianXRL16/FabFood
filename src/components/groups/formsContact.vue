<template>
  <form class="container__forms">
    <text-fields :label="'Full Name'" :typeInput="'text'" />
    <text-fields :label="'Cell Phone Number'" :typeInput="'tel'" />
    <text-fields :label="'E-Mail'" :typeInput="'email'" />
    <text-fields :label="'Captchap'" :typeInput="'text'" />
    <controls-form :text="'Next'" />
  </form>
</template>

<script>
import textFields from "../inputs/textFields.vue";
import controlsForm from "../groups/controlsForm.vue";
export default {
  name: "FormsContact",
  components: {
    textFields,
    controlsForm,
  },
};
</script>
<style scoped>
.container__forms {
  height: calc(100vh - 70px - 88px - 75px);
  padding: 20px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  background-color: var(--white);
  border-radius: 0 0 5px 5px;
}

@media (max-width: 550px) {
  .container__forms{
    padding: 10px 20px;
    gap: 15px;
  }
}
</style>
