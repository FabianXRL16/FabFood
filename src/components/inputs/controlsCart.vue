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
  props: {
    num: {
      type: Number,
      default: 1
    },
    id: {
      type: String,
      default: ''
    }
  },
  data() {
    return{}
  },
  methods: {
    minus() {
      if(this.num > 1){
        this.$store.dispatch('orderCountFood',{
          id: this.id,
          counter: -1
        })
      }
    },
    plus() {
      if(this.num < 10){
        this.$store.dispatch('orderCountFood',{
          id: this.id,
          counter: +1
        })
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
