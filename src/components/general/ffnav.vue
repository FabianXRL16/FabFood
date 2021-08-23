<template>
  <div class="ffheader__list">
    <router-link class="router" 
      v-for="item in list" :key="item.id" 
      :to="item.ref">
      {{item.subtitle}}
    </router-link>
    <!--<ul>
      <li v-for="item in list" :key="item.id">
        <a :href="item.ref">{{ item.subtitle }}</a>
      </li>
    </ul>-->
  </div>
</template>
<script>
export default {
  name: "Nav",
  data() {
    return {
      title: "Confirm order",
      list: [
        { id: 1, subtitle: "Find food", ref: "/findFood" },
        { id: 2, subtitle: "Categories", ref: "/categories" },
        { id: 3, subtitle: "About us", ref: "/AboutUs" },
      ],
    };
  },
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";
.text {
  color: red;
}
.ffheader__list {
  height: 70px;
  display: flex;
}
.router {
  font-size: var(--text-secondary);
  text-decoration: none;
  display: block;
  padding: 20px 40px;
  color: var(--white);
  position: relative;
}
.router::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  background: transparent;
  bottom: 10px;
  left: 0;
  transition: 0.2s;
}
.router:hover::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background: var(--bg-primary);
  bottom: 10px;
  left: 0;
  transition: 0.3s;
}
</style>
