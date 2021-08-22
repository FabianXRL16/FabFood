<template>
  <div class="search">
    <input type="text" placeholder="Buscar ..." />
    <button>
      <img src="../../assets/img/search.svg" alt="" />
    </button>
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";
.search {
  display: flex;
  align-items: center;
  position: relative;
}
input {
  width: 550px;
  height: 50px;
  border-radius: 40px;
  padding: 0 20px;
  box-sizing: border-box;
  outline: none;
  border: none;
  font-size: var(--text-imput);
  color: var(--black);
}
button {
  border: none;
  background-color: var(--bg-primary);
  height: 45px;
  width: 45px;
  border-radius: 25px;
  position: absolute;
  left: 502.5px;
  transition: 0.2s;
  cursor: pointer;
}
button img {
  height: 20px;
}
button:hover img {
  height: 25px;
  transition: 0.2s;
}
@media (max-width: 620px) {
  input {
    width: 300px;
    height: 40px;
    font-size: var(--text-imput-mobile);
    border-radius: 30px;
    color: var(--black);
  }
  button {
    height: 37px;
    width: 37px;
    border-radius: 20px;
    position: absolute;
    left: 261px;
    transition: 0.5s;
  }
  button:hover img {
    height: 20px;
  }
}
</style>
