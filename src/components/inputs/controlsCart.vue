<template>
  <div class="controlsCart">
    <button @click="minus" class="btn"><i class="fas fa-minus"></i></button>
    <div class="span">{{num}}</div>
    <button @click="plus" class="btn"><i class="fas fa-plus"></i></button>
  </div>
</template>

<script>
export default {
  name: "controlsCart",
  data() {
    return{
      num: 1
    }
  },
  methods: {
    minus() {
      if(this.num > 1){
        this.$emit('changeCount', -1)
        this.num = this.num - 1
      }
    },
    plus() {
      if(this.num < 10){
        this.$emit('changeCount', +1)
        this.num = this.num + 1
      }
    }
  }
};
</script>
<style scoped>
.controlsCart{
    display: flex;
}
button{
    background: var(--bg-primary);
    color: var(--white);
    width: 20px;
    height: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2px;
}
button i{
    font-size: 10px;
}
.span{
    width: 50px;
    text-align: center;
}
</style>
