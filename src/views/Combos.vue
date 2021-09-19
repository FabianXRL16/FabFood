<template>
  <div class="container__combos">
    <back :title="'Combos'" />
    <content-combos />
  </div>
</template>

<script>
import back from "../components/general/back";
import contentCombos from "../components/general/contentCombos";
export default {
  name: "Combos",
  components: {
    back,
    contentCombos,
  },
};
</script>

<style scoped>
.container__combos{
    padding-top: 20px;
    padding-bottom: 20px;
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 20px;
    overflow-x: auto;
}
.container__combos::-webkit-scrollbar{
  width: 0;
  
}
</style>
