<template>
  <div class="contentFindFood">
    <div class="HeaderPage">
      <back :title="title" />
      <div class="searchFindFood">
        <search :find="true" />
      </div>
    </div>
    <div class="HeaderPage__space"></div>
    <categories />
  </div>
</template>

<script>
import back from "@/components/general/back.vue";
import search from "../components/inputs/search.vue";
import categories from "../components/groups/categories.vue";
export default {
  name: "FindFood",
  components: { back, search, categories },
  data() {
    return {
      title: "To eat!",
    };
  },
};
</script>

<style scoped>
@import "../assets/styles/variables.css";
.HeaderPage{
  position: fixed;
  z-index: 10;
  width: 100%;
}
.HeaderPage__space{
  height: 158px;
}
.contentFindFood {
  height: calc(100vh - 70px);
}
.searchFindFood {
  padding: var(--p-main);
  height: 70px;
  width: 100%;
  display: grid;
  align-items: center;
  box-sizing: border-box;
}
@media (max-width: 820px) {
  .searchFindFood {
    padding: var(--p-main-mobile);
  }
}
</style>
