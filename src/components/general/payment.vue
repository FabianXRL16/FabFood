<template>
  <div class="container__payment">
    <title-payment :totalPrice="212.0" />
    <div class="container__content">
      <div class="tabs">
        <label class="tab" v-for="step in steps" :key="step.title" :for="step.title">
          {{ step.title }}
          <i :class="step.icon"></i>
        </label>
      </div>
      <formsContact v-if="true" />
      <forms-address v-if="false" />
      <forms-payment v-if="false" />
    </div>
  </div>
</template>

<script>
import titlePayment from "../general/titlePayment.vue";
import formsContact from "../groups/formsContact.vue";
import formsAddress from "../groups/formsAddress.vue";
import FormsPayment from '../groups/formsPayment.vue';
export default {
  name: "Payment",
  components: { titlePayment, formsContact, formsAddress, FormsPayment },
  data() {
    return {
      steps: [
        { title: "Contact", icon: "fas fa-user" },
        { title: "Address", icon: "fas fa-map-marker-alt" },
        { title: "Payment", icon: "far fa-credit-card" },
      ],
    };
  },
};
</script>
<style scoped>
@import "../../assets/styles/variables.css";
.container__content {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.tabs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: var(--white);
  border-radius: 8px 8px 0px 0;
}
.tab {
  background-color: var(--white);
  padding: 20px 0;
  border-radius: 8px 8px 0 0;
  color: var(--gray-ligth);
  font-size: var(--text-title-4);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  transition: 0.3s;
  position: relative;
  cursor: pointer;
}
.tab:nth-child(1):hover,
.tab:nth-child(2):hover,
.tab:nth-child(3):hover {
  color: var(--bg-primary);
  transition: 0.3s;
  background-color: rgba(242,7,70,.15);
}
.tab:nth-child(1):hover::after,
.tab:nth-child(2):hover::after,
.tab:nth-child(3):hover::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: var(--bg-primary);
  bottom: 0;
}
</style>
