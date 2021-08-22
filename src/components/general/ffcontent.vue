<template>
  <div class="ffcontent">
    <ffsectionHome />
    <slider :foods="foodsMain" />
  </div>
</template>

<script>
import ffsectionHome from "./ffsectionHome.vue";
import slider from "../groups/slider";
export default {
  name: "Ffnav",
  components: {  ffsectionHome, slider },
  data() {
    return {
      foodsMain: [
        { id: 1, name: "asdas", img: "https://lh3.google.com/u/0/d/1PtTQIOP-rDP82IY4HaQ0OBMcfhLaiaAV=w1920-h953-iv1" },
        /*{ id: 2, name: "asdas", img: "https://lh3.google.com/u/0/d/1H_LV1Be04bwP29_Bz2tDo-gKBEgaNIi-=w2000-h1266-iv1" },
        { id: 3, name: "asdas", img: "https://lh3.google.com/u/0/d/1SWgMugIRGT8lGEcvHUdvl0Qw5HSjG94l=w2000-h1266-iv1" },
        { id: 4, name: "asdas", img: "https://lh3.google.com/u/0/d/1MwLwtI0c-vZUXs59z-gJgINjy6f4O1Zo=w2000-h1266-iv1" },
        { id: 5, name: "asdas", img: "https://lh3.google.com/u/0/d/1Z37s8x2R1MiahRB9rB7K0h6Kxrvm9HSg=w2000-h1266-iv1" },*/
      ],
    };
  },
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";

.ffcontent {
  height: calc(100vh - 70px);
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: var(--p-main);
}

@media (max-width: 820px){
  .ffcontent{
    padding: var(--p-main-mobile);
  }
}
</style>
