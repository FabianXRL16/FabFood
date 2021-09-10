<template>
  <div class="controlsCart">
    <button class="btn"><i class="fas fa-minus"></i></button>
    <div class="span">1</div>
    <button class="btn"><i class="fas fa-plus"></i></button>
  </div>
</template>

<script>
export default {
  name: "controlsCart",
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
