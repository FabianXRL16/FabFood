<template>
  <div class="ffheader__list">
    <ul>
      <li v-for="item in list" :key="item.id">
        <a :href="item.ref">{{ item.subtitle }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Nav",
  data() {
    return {
      title: "Confirm order",
      list: [
        { id: 1, subtitle: "Find food", ref: "/" },
        { id: 2, subtitle: "Categories", ref: "/" },
        { id: 3, subtitle: "About us", ref: "/" },
      ],
    };
  },
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";
.ffheader__list {
  height: 70px;
}
.ffheader__list ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.ffheader__list ul li{
  display: inline-block;
}
.ffheader__list ul li a{
  font-size: var(--text-secondary);
  text-decoration: none;
  display: block;
  padding: 20px 40px;
  color: var(--white);
  position: relative;
}
.ffheader__list ul li a::after{
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  background: transparent;
  bottom: 10px;
  left: 0;
  transition: .2s;
}
.ffheader__list ul li a:hover::after{
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background: var(--bg-primary);
  bottom: 10px;
  left: 0;
  transition: .3s;
}
</style>
