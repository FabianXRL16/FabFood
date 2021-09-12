<template>
  <div class="container__formsAddresss">
    <img
      src="https://www.google.com/maps/d/thumbnail?mid=1bcvKXgWwc1ChGjY-Jn-SGc_LEjk&hl=es"
      alt=""
    />
    <input class="btn stepNext" type="submit" value="Next">
  </div>
</template>

<script>
export default {
  name: "FormsAddress",
  components: {
  },
};
</script>
<style scoped>
.container__formsAddresss {
  height: calc(100vh - 70px - 88px - 75px);
  padding: 20px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  background-color: var(--white);
  border-radius: 0 0 5px 5px;
}
</style>
