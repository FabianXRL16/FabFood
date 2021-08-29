<template>
  <div class="ffheader__list">
    <button v-for="item in list" :key="item.id" @click="closed">
      <router-link class="router" :to="item.ref">
        {{ item.subtitle }}
      </router-link>
    </button>
  </div>
</template>
<script>
export default {
  name: "Nav",
  props: {},
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
  methods:{
      closed(){
          this.$emit("closed")
      }
  }
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";
.ffheader__list {
  height: 70px;
  display: flex;
}
button{
    background-color: transparent;
    outline: none;
    border: none;
    transform: scale(1);
    transition: .4s;
}
button:hover{
    transform: scale(1.2);
    transition: .4s;

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
