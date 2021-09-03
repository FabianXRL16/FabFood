<template>
    <div class="container__orderDetails">
        <div>
            Shopping Cart
        </div>
        <div>
            items
        </div>
        <div>
            
        </div>
    </div>
</template>
<script>

export default{
    name: "OrderDetails",
    components:{

    }
}
</script>

<style scoped>
@import "../../assets/styles/variables.css";
.container__orderDetails {
  background: blue;
  width: calc(100vw - 2*var(--p) - 20px - 400px);
  box-sizing: border-box;
}
@media (max-width: 1150px){
    .container__orderDetails{
        width: 100%;
    }
}
@media (max-width: 820px) {
  .container__orderDetails {
  }
}
</style>
