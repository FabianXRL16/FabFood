<template>
  <div class="contentFindFood">
    <div class="headerPage">
      <back :title="title" />
      <div class="searchFindFood">
        <search :find="true" @filter="onFoodFilter" />
      </div>
    </div>
    <div class="headerPage__space"></div>
    <div class="foods__space">
      <categories :categories="categories" @filterFood="toShowFood" />
      <foods class="foods" :foods="data" />
      <div v-if="data.length == 0" class="noResultsFound">
        <i class="far fa-frown"></i><h1>No results found</h1>
      </div>
    </div>
  </div>
</template>

<script>

import back from "@/components/general/back.vue";
import search from "../components/inputs/search.vue";
import categories from "../components/groups/categories.vue";
import foods from "../components/groups/foods.vue";

export default {
  name: "FindFood",
  components: { back, search, categories, foods },
  data() {
    return {
      title: "To eat!",
      category: 1,
      data: [],
      foods: this.$store.state.foods,
      categories: this.$store.state.categories
    };
  },
  created(){
    this.onFoodFilter()
  },
  methods: {
    toShowFood(id) {
      this.category = id;
      this.onFoodFilter()
    },
    findFoodFilter(filter) {
      if (!filter) {
        return this.foods.filter(a => a.category === this.category);
      }
      return this.foods.filter(a =>
        a.id.toLowerCase().includes(filter.toLowerCase())
      );
    },
    onFoodFilter(filter){
      this.data = this.findFoodFilter(filter)
    }
  },
};
</script>

<style scoped>
@import "../assets/styles/variables.css";
.headerPage {
  width: 100%;
  height: 178px;
  padding-top: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}
.searchFindFood {
  height: 70px;
  width: 100%;
  display: grid;
  align-items: center;
  box-sizing: border-box;
}
.foods__space {
  max-height: calc(100vh - 178px - 70px);
  overflow-x: auto;
  box-sizing: border-box;
  padding-bottom: 20px;
}
.foods__space::-webkit-scrollbar {
  width: 0;
}
.noResultsFound{
  margin-top: 80px;
  display: flex;
  place-content: center;
  place-items: center;
  gap: 20px;
  color: var(--gray-ligth);
}
.noResultsFound h1, .noResultsFound .fa-frown{
  margin: 0;
  font-size: 40px;
}
@media (max-width: 820px) {
  .noResultsFound h1, .noResultsFound .fa-frown{
    font-size: 30px;
  }
  
@media (max-width: 820px) {
  .headerPage {
    gap: 15px;
    padding-top: 0;
  }
}
}
</style>
