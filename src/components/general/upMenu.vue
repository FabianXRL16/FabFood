<template>
  <div class="menu">
    <div class="container">
      <div class="action">
        <button class="button" @click="closeMenu">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="contentMenu">
          <ffnav :up="true" class="nav" />
          <orderActions class="order" />
      </div>
    </div>
  </div>
</template>

<script>
import ffnav from "../general/ffnav.vue";
import orderActions from"../general/orderActions.vue";
export default {
  name: "upMenu",
  components:{orderActions, ffnav},
  methods: {
    closeMenu() {
      this.$emit("closeUp");
    },
  },
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";
.menu {
  height: 100vh;
  width: 100vw;
  background-color: rgba(77, 77, 77, 0.95);
  display: grid;
  place-content: center;
}
.container{
    width: 60vw;
    height: 80vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.menu .action{
    width: 100%;
    text-align: center;
    margin-bottom: 40px;
    }
.menu .action .button {
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  height: 30px;
  width: 30px;
  color: var(--white);
  font-size: 30px;
  transform: scale(1);
  transition: 0.3s;
}
.contentMenu{
    transform: scale(1.2);
    box-sizing: border-box;
}
.menu .action .button:hover {
  transform: scale(1.2);
  transition: 0.3s;
}
.nav{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 210px;
}
@media (max-width: 1180px){
    .order{
        display: none;
    }
}
@media (max-width: 520px){
    .order{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}
</style>
