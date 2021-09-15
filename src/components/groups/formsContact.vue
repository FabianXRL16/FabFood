<template>
  <form class="forms__contact">
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
.forms__contact {
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 25px 20px 20px;
}
@media (max-width: 550px) {
  .forms__contact {
    gap: 12px;
    padding: 20px;
  }
}
</style>
