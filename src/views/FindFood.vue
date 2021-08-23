<template>
    <div>
        <back :title="title" />
    </div>
</template>

<script>
import back from "@/components/general/back.vue"
export default{
    name: "FindFood",
    components: {back},
    data(){
        return{
            title: "To eat!"
        }
    }
}
</script>

<style scoped>

</style>

