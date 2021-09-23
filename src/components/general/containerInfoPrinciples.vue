<template>
  <div class="containerInfo">
    <div class="contentInfo">
      <card-home v-for="item in dataCard" :key="item.id" :data="item">
        <template>
          <img
            class="iconPrinciples"
            :src="require(`../../assets/img/${item.name.toLowerCase()}.svg`)"
            alt=""
          />
        </template>
      </card-home>
    </div>
    <container-botton-home />
  </div>
</template>

<script>
import cardHome from "../items/cardHome.vue";
import ContainerBottonHome from "./containerBottonHome.vue";
export default {
  components: { cardHome, ContainerBottonHome },
  name: "containerInfoPrinciples",
  data() {
    return {
      dataCard: [
        {
          id: 0,
          name: "Fast",
          description: "Lorem  ads dasd as d a sf erqquqt rnu w56 i 56in 75 ",
          icon: "@/assets/img/fast.svg",
        },
        {
          id: 1,
          name: "Delicious",
          description: "Lorem  ads dasd as d a sf erqquqt rnu w56 i 56in 75 ",
          icon: "@/assets/img/delicious.svg",
        },
        {
          id: 2,
          name: "Health",
          description: "Lorem  ads dasd as d a sf erqquqt rnu w56 i 56in 75 ",
          icon: "@/assets/img/Health.svg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.containerInfo {
  position: absolute;
  width: 100%;
  left: 0;
  background: var(--bg-primary);
  margin: 10px 0;
  display: grid;
  gap: 50px;
  grid-template-rows: auto 1fr;
  padding: 60px var(--p) 0;
  box-sizing: border-box;
  color: var(--white);
}
.contentInfo {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: auto;
  gap: 30px 50px;
}
.iconPrinciples {
  height: 50px;
}
@media (max-width: 1200px) {
  .contentInfo {
    gap: 10px 40px;
  }
}
@media (max-width: 820px) {
  .containerInfo {
    padding: 40px var(--p-mobile);
    margin: 40px 0 10px;
  }
}
</style>
