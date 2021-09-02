<template>
  <div class="container">
    <img class="img" src="../assets/img/404.svg" alt="" />
    <h1 class="msg">
      Sorry, page not found
    </h1>
    <router-link class="button" to="/">
      Go Back
    </router-link>
    <p class="logo">Fab<strong>Food</strong></p>
  </div>
</template>

<script>
export default {
  name: "Error",
};
</script>

<style scoped>
@import "../assets/styles/variables.css";
.container {
  padding: var(--p-main);
  box-sizing: border-box;
  width: 100%;
  height: calc(100vh - 70px);
  display: grid;
  place-content: center;
  text-align: center;
}
.msg {
  color: var(--white);
  font-family: var(--font_primary);
}
.logo {
  color: var(--white);
  font-size: var(--text-imput);
  margin: 0;
}
.logo strong {
  color: var(--bg-primary);
}
.img {
  height: 200px;
  margin: auto;
}
.button {
  background-color: var(--bg-primary);
  text-decoration: none;
  color: var(--white);
  font-size: var(--text-title-2);
  margin: 20px 0 80px 0;
  border-radius: 50px;
  padding: 5px;
  transition: .4s;
}
.button:hover {
  transition: .4s;
  background-color: var(--white);
  color: var(--bg-primary);
  font-weight: 800;
}
@media (max-width: 820px) {
  .container {
    padding: var(--p-main-mobile);
  }
  .img {
  height: 180px;
}
.button{
    border-radius: 30px;
  padding: 2px;
}
}
@media (max-width: 520px){
.img {
  height: 120px;
}
}

</style>
