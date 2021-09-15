<template>
  <form class="forms__payment">
    <select-card :label="'Select Card Type'" :typeCard="typeCard" />
    <text-fields :label="'Card Number'" :typeInput="'card'" />
    <text-fields :label="'Card Name'" :typeInput="'text'" />
    <div class="cardInfo">
      <text-fields :label="'Expiry Date'" :typeInput="'month'" />
      <text-fields :label="'CVV'" :typeInput="'number'" />
    </div>
    <controls-form :text="'Make Payment'" />
  </form>
</template>

<script>
import textFields from "../inputs/textFields.vue";
import selectCard from "../inputs/selectCard.vue";
import controlsForm from "../groups/controlsForm.vue";
export default {
  name: "FormsPayment",
  components: {
    textFields,
    selectCard,
    controlsForm,
  },
  data() {
    return {
      typeCard: [
        { name: "Visa", icon: "fab fa-cc-visa" },
        { name: "Master Card", icon: "fab fa-cc-mastercard" },
        { name: "Discover", icon: "fab fa-cc-discover" },
        { name: "Diners Club", icon: "fab fa-cc-diners-club" },
      ],
    };
  },
};
</script>
<style scoped>
.forms__payment {
  display: grid;
  gap: 24px;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
}
  .cardInfo {
    display: grid;
    grid-template-columns: 1fr 100px;
    gap: 10px;
    box-sizing: border-box;
    width: 100%;
  }
@media (max-width: 550px) {
  .forms__payment {
    gap: 10px;
    padding: 20px;
  }
  .cardInfo {
    grid-template-columns: 1fr 130px;
    gap:10px;
  }
}
</style>
