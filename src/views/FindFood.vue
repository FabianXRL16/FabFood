<template>
  <div>
    <back :title="title" />
    <div class="searchFindFood">
      <search :find="true" />
    </div>
  </div>
</template>

<script>
import back from "@/components/general/back.vue";
import search from "../components/inputs/search.vue";
export default {
  name: "FindFood",
  components: { back, search },
  data() {
    return {
      title: "To eat!",
    };
  },
};
</script>

<style scoped>
@import "../assets/styles/variables.css";
.searchFindFood {
  padding: var(--p-main);
  height: 70px;
  width: 100%;
  display: grid;
  align-items: center;
  box-sizing: border-box;
}
@media (max-width: 820px){
    .searchFindFood {
  padding: var(--p-main-mobile);
}
}
</style>
