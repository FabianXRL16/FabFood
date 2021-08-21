<template>
  <div class="ffheader">
    <div>
      LOGO
    </div>
    <div class="ffheader__list">
      <ul>
        <li>Find food</li>
        <li>Catergories</li>
        <li>About us</li>
      </ul>
      <div>
        <button>Confirm order</button>
        <button>Confirm order</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ffheader",
  components: {},
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";
.ffheader {
  background-color: red;
  display: flex;
  justify-content: space-between;
  padding: 0 80px 0;
}

.ffheader__list {
  display: flex;
  justify-content: space-between;
  width: 80%;
}

.ffheader__list ul{
    display: flex;
    justify-content: space-around;
    width: 50%;
}
</style>
