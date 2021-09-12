<template>
  <div class="container__payment">
    <title-payment :totalPrice="212.0" />
    <div class="container__content">
      <div class="tabs">
        <button
          :class="step.style"
          v-for="(step, i) in steps"
          :key="i"
          @click="focusTab(step, i)"
        >
          {{ step.title }}
          <i :class="step.icon"></i>
        </button>
      </div>
      <formsContact v-if="tab === 'contact'" />
      <forms-address v-if="tab === 'address'" />
      <forms-payment v-if="tab === 'payment'" />
    </div>
  </div>
</template>

<script>
import titlePayment from "../general/titlePayment.vue";
import formsContact from "../groups/formsContact.vue";
import formsAddress from "../groups/formsAddress.vue";
import FormsPayment from "../groups/formsPayment.vue";
export default {
  name: "Payment",
  components: { titlePayment, formsContact, formsAddress, FormsPayment },
  data() {
    return {
      steps: [
        { title: "Contact", icon: "fas fa-user", style: "tab btn tabF" },
        { title: "Address", icon: "fas fa-map-marker-alt", style: "tab btn" },
        { title: "Payment", icon: "far fa-credit-card", style: "tab btn" },
      ],
      tab: "contact",
    };
  },
  methods: {
    focusTab(step, i) {
      this.tab = step.title.toLowerCase();
      if (i == 0) {
        this.steps[0].style = "tab btn tabF";
        this.steps[1].style = "tab btn";
        this.steps[2].style = "tab btn";
      } else if (i == 1) {
        this.steps[1].style = "tab btn tabF";
        this.steps[2].style = "tab btn";
        this.steps[0].style = "tab btn";
      } else {
        this.steps[2].style = "tab btn tabF";
        this.steps[0].style = "tab btn";
        this.steps[1].style = "tab btn";
      }
    },
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
.tabF {
  color: var(--bg-primary);
  transition: 0.3s;
  background-color: rgba(242, 7, 70, 0.15);
}
.tabF::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: var(--bg-primary);
  bottom: 0;
}
</style>
