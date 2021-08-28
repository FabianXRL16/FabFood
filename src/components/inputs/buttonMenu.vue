<template>
    <button @click="up">
        <img src="../../assets/img/menu_icon.svg" alt="">
    </button>
</template>
<script>
export default {
    name: "buttonMenu",
    methods:{
        up(){
            this.$emit("upMenu")
        }
    }
}
</script>
<style scoped>
button{
    background-color: transparent;
    border: none;
    cursor: pointer;
}
button img{
    height: 30px;
    margin-top: 4px;
}
</style>