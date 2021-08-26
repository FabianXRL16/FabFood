<template>
  <div class="categories">
    <h3 class="title">{{ title }}</h3>
    <div class="content__category">
      <category
        v-for="category in categories"
        :key="category.id"
        :category="category"
      >
        <template>
          <img :src="require(`../../assets/img/iconCategories/${category.name.toLowerCase()}.png`)" alt="" />
          <h3>{{category.name}}</h3>
        </template>
      </category>
    </div>
  </div>
</template>

<script>
import category from "../../components/items/category.vue";
import data from "../../../api/data.json";
export default {
  name: "Categories",
  components: { category },
  data() {
    return {
      title: "Select a category",
    };
  },
  computed: {
    data() {
      return data.foods;
    },
    categories() {
      return data.categories;
    },
  },
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";
.categories {
  padding: var(--p-main);
}
.title {
  color: var(--gray-ligth);
  font-size: 14px;
}
.content__category {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  width: 100%;
  justify-items: center;
  box-sizing: border-box;
  padding: 10px 0;
}
@media (max-width: 820px) {
  .categories {
    padding: var(--p-main-mobile);
  }
  .content__category {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    width: 720px;
  }
  .title {
    font-size: 12px;
  }
}
</style>
