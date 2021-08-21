<template>
  <div class="search">
    <input type="text" placeholder="Buscar ..." />
    <button><img src="../../assets/img/search.svg" alt=""></button>
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";
input {
  background-color: var(--white);
  border: none;
  padding: 20px;
  font-size: 20px;
  outline: none;
  border-radius: 40px;
  width: 95%;
}

.search{
    position: relative;
}

.search button{
    position: absolute;
    top: 4px;
    right: -9px;
    background-color: var(--bg-primary);
    outline: none;
    border: none;
    height: 55px;
    width: 55px;
    border-radius: 30px;
    transition: .2s;
    cursor: pointer;
}

.search button:hover{
    background-color: var(--black);
    transition: .2s;
}

.search button img{
    height: 25px;
}

</style>
