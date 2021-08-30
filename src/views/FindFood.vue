<template>
  <div class="contentFindFood">
    <div class="headerPage">
      <back :title="title" />
      <div class="searchFindFood">
        <search :find="true" @filter="findFoodFilter" />
      </div>
    </div>
    <div class="headerPage__space"></div>
    <div class="foods__space">
      <categories :categories="categories" @filterFood="toShowFood" />
      <foods class="foods" :foods="foods" :id="category" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

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
      category: 0,
    };
  },
  computed: {
    ...mapState('categories',['categories']),
    ...mapState('foods',['foods'])
  },
  methods:{
    toShowFood(id){
      this.category = id
    },
    findFoodFilter(filter){
      if (!filter){
        return this.foods[this.category]
      }
      return this.foods.filter(
        food => {
          food.filter(
            a => a.id.toLowerCase().includes(filter.toLowerCase())
          )
        })
    }
  }
};
</script>

<style scoped>
@import "../assets/styles/variables.css";
.headerPage {
  width: 100%;
  height: 178px;
  padding: 20px 0 0;
  box-sizing: border-box;
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
.foods__space{
  max-height: calc(100vh - 178px - 70px);
  overflow-x: auto;
  box-sizing: border-box;
  padding-bottom: 20px;
}
.foods__space::-webkit-scrollbar{
  width: 0;
}
.foods {
  padding: var(--p-main);
}
@media (max-width: 820px) {
  .searchFindFood,
  .foods {
    padding: var(--p-main-mobile);
  }
}
</style>
