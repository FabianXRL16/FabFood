<template>
  <div class="categories">
    <h3 class="title">{{ title }}</h3>
    <div class="content__category">
      <category
        v-for="category in categories"
        :key="category.id"
        :id="category.id"
        @filterFoods="filter(category.id)"
      >
        <template>
          <img
            :src="
              require(`@/assets/img/iconCategories/${category.name.toLowerCase()}.png`)
            "
            alt=""
          />
          <h3>{{ category.name }}</h3>
        </template>
      </category>
    </div>
  </div>
</template>

<script>
import category from "../../components/items/category.vue";
export default {
  name: "Categories",
  components: { category },
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      title: "Select a category",
    };
  },
  methods:{
    filter(id){
      this.$emit("filterFood",id)
    }
  }
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";
.title {
  color: var(--gray-ligth);
  font-size: 14px;
}
.content__category {
  display: flex;
  justify-content: space-between;
  height: 120px;
  box-sizing: border-box;
  overflow-x: auto;
}
.content__category::-webkit-scrollbar{
  width: 0;
  
}
h3{
  margin-top: 0;
}
@media (max-width: 820px) {
  .title {
    font-size: 12px;
  }
}
</style>
