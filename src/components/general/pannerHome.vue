<template>
  <div class="pannerHome">
    <h4>Welcome to</h4>
    <h1>FabFood restaurant</h1>
    <p>
      They say that <b>eating rich is a sin,</b> that's why we invite <br />
      you to <b>do penance with us</b>
    </p>
    <span>+51 987658761</span>
    <button class="btn btnMain">Order Now</button>
    <h1 v-if="this.$router.name === !''">a</h1>
  </div>
</template>

<script>
export default {
  name: "PannerHome",
};
</script>

<style scoped>
.pannerHome {
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  color: white;
}
h4,
h1,
p,
h6 {
  margin: 0;
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);
  text-align: center;
}
h4 {
  color: var(--bg-primary);
  font-style: italic;
  font-size: var(--text-title-3);
}
h1 {
  text-transform: uppercase;
  font-size: 60px;
  margin: 5px 0 10px;
}
p {
  color: var(--gray-ligth);
  font-size: var(--text-title-4);
}
p b {
  font-size: 20px;
  color: var(--bg-yellow);
}
span {
  font-size: 20px;
  margin-top: 20px;
  color: var(--gray-ligth);
}
.btnMain {
  background-color: var(--bg-primary);
  padding: 10px 50px;
  font-size: var(--text-title-4);
  border-radius: 20px;
  color: var(--white);
  margin-top: 50px;
}
</style>
