<template>
  <form class="container__forms">
    <select-card
      :label="'Select Card Type'"
      :typeCard="typeCard"
    />
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
    textFields, selectCard, controlsForm
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
.container__forms {
  height: calc(100vh - 70px - 88px - 90px);
  padding: 20px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  background-color: var(--white);
  border-radius: 0 0 5px 5px;
}
.cardInfo {
  display: grid;
  grid-template-columns: 1fr 150px;
  gap: 20px;
  box-sizing: border-box;
  width: 100%;
}
</style>
