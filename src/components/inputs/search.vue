<template>
  <div class="search">
    <input
      :class="find ? 'inputFind' : 'input'"
      type="text"
      :placeholder='!seudoFilter?"Search...":`You searched ${seudoFilter}`'
      v-model="filter"
    />
    <button :class="find ? 'buttonFind' : 'button'" @click="filterFood">
      <i class="fas fa-search"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: {
    find: {
      type: Boolean,
      default: false,
    },
  },
  data(){
    return {
      filter : "",
      seudoFilter:""
    }
  },
  methods:{
    filterFood(){
      this.$emit("filter", this.filter)
      this.seudoFilter = this.filter
      this.filter = ""
    }
  }
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";
.search{
  display: flex;
  align-items: center;
}
input {
  height: 50px;
  border-radius: 40px;
  padding: 0 68.5px 0 20px;
  box-sizing: border-box;
  outline: none;
  border: none;
}
.input {
  width: 550px;
  font-size: var(--text-imput);
  color: var(--black);
}
.inputFind {
  width: 100%;
  font-size: 18px;
}
button {
  border: none;
  background-color: var(--bg-primary);
  height: 45px;
  width: 45px;
  border-radius: 25px;
  transition: .2s;
  cursor: pointer;
  margin-left: -47.5px;
}
.buttonFind{
  margin-left: -48.5px;
  margin-top: .5px;
}
button i {
  font-size: 25px;
  color: var(--white);
}
@media (max-width: 620px) {
  .input {
    width: 300px;
    height: 40px;
    font-size: var(--text-imput-mobile);
    border-radius: 30px;
    color: var(--black);
  }
  .button {
    height: 37px;
    width: 37px;
    border-radius: 20px;
    transition: 0.5s;
    margin-left: -39.5px;
  }
  button i{
    font-size: 23px;
  }
}
</style>
