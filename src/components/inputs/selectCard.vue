<template>
  <div class="selectCard">
    <label :for="`i${label.replace(/\s+/g, '')}`">{{ label }}</label>
    <div class="cards">
      <button class="btn btnCard" type="button"
        v-for="(card, i) in typeCard" :key="i">
        <i :class="card.icon"></i>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "selectCard",
  props: {
    label: {
      type: String,
      default: "name",
    },
    typeCard: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style scoped>
@import "../../assets/styles/variables.css";
.selectCard{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
label {
  color: var(--gray-dark);
}
.btnCard{
    background-color: transparent;
    padding: 0;
}
.btnCard i:hover{
    color: var(--bg-primary);
}
.cards {
  display: flex;
  justify-content: space-between;
}
.cards i {
  font-size: 40px;
  color: var(--gray-ligth);
  cursor: pointer;
}
#card1:checked ~ .icon {
  color: red;
}
.radio {
  display: none;
}
@media (max-width: 550px){
  label{
    font-size: 14px;
  }
}
</style>
