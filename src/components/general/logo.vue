<template>
  <router-link to="/" class="logo">
    <img class="img" src="../../assets/img/logo_v2.png" alt="" />
    Fab<strong>Food</strong>
  </router-link>
</template>

<script>
export default {
  name: "Logo",
};
</script>

<style scoped>

@import "../../assets/styles/variables.css";

.logo{
    display: flex;
    align-items: center;
    color: var(--white);
    font-size: var(--text-primary);
    text-decoration: none;
}

.img{
    height: 50px;
    margin-right: 10px;
}

strong{
    color: var(--bg-primary);
}

@media (max-width: 620px) {
  .img {
    display: none;
  }
}

</style>
