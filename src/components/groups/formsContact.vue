<template>
    <div class="container__forms">
        <text-fields :label="'Name'" />
        <text-fields :label="'Last Name'" />
        <text-fields :label="'Cell Phone Number'" />
        <text-fields :label="'E-Mail'" />
        <text-fields :label="'Captchap'" />
      </div>
</template>

<script>
import textFields from "../inputs/textFields.vue";
export default{
    name: "FormsContact",
    components:{
        textFields
    }
}
</script>
<style scoped>
.container__forms{
  height: calc(100vh - 70px - 88px - 90px);
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