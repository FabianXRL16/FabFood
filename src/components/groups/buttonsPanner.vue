<template>
  <div class="containerButtonPanner">
    <button class="btn btnPanner" :class="currentButton === 0 ? 'btnActive' : ''" @click="changeBanner(0)"></button>
    <button class="btn btnPanner" :class="currentButton === 1 ? 'btnActive' : ''" @click="changeBanner(1)"></button>
    <button class="btn btnPanner" :class="currentButton === 2 ? 'btnActive' : ''" @click="changeBanner(2)"></button>
  </div>
</template>
<script>
export default {
  name: "buttonsPanner",
  data() {
    return {
      currentButton: 0
    }
  },
  methods: {
    changeBanner(n) {
      this.$emit('changeBanner',n)
      this.currentButton = n
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
.btnActive {
  background-color: var(--bg-primary);
}
.btnPanner:hover {
  background-color: var(--bg-primary);
  transition: .3s;
}
</style>
