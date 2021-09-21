<template>
  <div class="pannerHome">
    <h4>Welcome to</h4>
    <h1>FabFood restaurant</h1>
    <p>
      They say that <b>eating rich is a sin,</b> that's why we invite <br />
      you to <b>do penance with us</b>
    </p>
    <span>+(900) 123 - 456</span>
    <button class="btn btnMain">Order Now</button>
  </div>
</template>

<script>
export default {
  name: "PannerHome",
};
</script>

<style scoped>
.pannerHome {
  height: calc(100vh - 200px);
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
  transform: scale(1.2);
  transition: 0.3s;
}
.btnMain:hover {
  background-color: var(--white);
  color: var(--bg-primary);
  transform: scale(1);
  transition: 0.3s;
}
@media (max-width: 920px) {
  .pannerHome {
    height: calc(100vh - 100px);
  }
  h1 {
    font-size: 46px;
  }
  p {
    font-size: 14px;
  }
  p b {
    font-size: 16px;
  }
}
@media (max-width: 820px) {
  .pannerHome {
    height: calc(100vh - 180px);
  }
  h1 {
    font-size: 36px;
  }
  h4 {
    font-size: 20px;
  }
  p {
    font-size: 12px;
  }
  p b {
    font-size: 13px;
  }
  .btnMain {
    margin-top: 40px;
  }
}
</style>
