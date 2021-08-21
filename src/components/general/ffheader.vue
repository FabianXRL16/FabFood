<template>
  <div class="ffheader">
    <div class="logo">
      <img class="img" src="../../assets/img/logo_v2.png" alt="" />
      Fab<strong>Food</strong>
    </div>
    <div class="ffheader__list">
      <ul>
        <li><a href="/">Find food</a></li>
        <li><a href="/">Catergories</a></li>
        <li><a href="/">Restaurants</a></li>
        <li><a href="/">About us</a></li>
      </ul>
      <div class="actions">
        <button-car />
        <button-primary :title="'Confirm order'" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from "../inputs/buttonPrimary.vue";
import ButtonCar from "../inputs/buttonCar.vue";
export default {
  name: "Ffheader",
  components: { ButtonPrimary, ButtonCar },
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";
.ffheader {
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--p-main);
  color: var(--white);
  height: 70px;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}

.logo strong {
  color: var(--bg-primary);
}

.img {
  height: 50px;
}

.ffheader__list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
}

.ffheader__list ul {
  display: flex;
  width: 70%;
  list-style: none;
  padding: 0;
}

.ffheader__list ul li a {
  padding: 23px 30px;
  text-decoration: none;
  color: var(--white);
  position: relative;
}

.ffheader__list ul li:after {
    display: block;
  border-bottom: 4px solid transparent;
  width: 10%;
  content: " ";
  position: absolute;
  top: 50px;
}

.ffheader__list ul li:hover::after {
  border-bottom: 2px solid var(--bg-primary);
  transform: scale(0.5);
  transition: 0.5s;
}

.actions {
  display: flex;
  gap: 20px;
}
</style>
