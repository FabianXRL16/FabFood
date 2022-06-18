<template>
  <div class="containerButtonPanner">
    <button class="btn btnPanner" v-for="n in 3" :key="n" @click="changeBanner(n)"></button>
  </div>
</template>
<script>
export default {
  name: "buttonsPanner",
  methods: {
    changeBanner(n) {
      this.$emit('changeBanner',n)
    }
  }
};
</script>
<style scoped>
.containerButtonPanner {
  height: 40px;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: flex-end;
}
.btnPanner {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: var(--bg-secondary);
  transition: .3s;
}
.btnPanner:nth-child(1) {
  background-color: var(--bg-primary);
}
.btnPanner:hover {
  background-color: var(--bg-primary);
  transition: .3s;
}
</style>
