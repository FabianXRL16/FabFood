<template>
  <div class="containerChef">
    <div class="containerImg">
        <img class="chef" src="../../assets/img/chef.png" alt="">
    </div>
    <div class="textChef">
        <h1>
            Expert cooks for the fine palate.
        </h1>
        <p class="message">We care that your tastes are pleased in the best possible way,
            in a very wide schedule every day of the week.</p>
        <p class="slogan">
           "Your favorite food with one click"
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "containerChef",
};
</script>

<style scoped>
.containerChef {
  background-color: var(--gray-dark);
  padding: 0 var(--p);
  display: flex;
  justify-content: space-between;
  gap: 50px;
  box-sizing: border-box;
}
.containerImg{
    height: auto;
    display: flex;
    align-items: flex-end;
    padding-top: 20px;
}
.chef{
    height: 350px;
}
.textChef{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;
}
.textChef h1{
    margin: 0;
    color: var(--bg-yellow);
    font-size: 35px;
}
.textChef .message{
    margin: 20px 0 40px;
    color: var(--gray-ligth);
}
.slogan {
    font-size: 22px;
    margin: 0;
}
@media (max-width: 820px) {
  .containerChef {
    padding: 0 var(--p-mobile);
  }
  .chef{
    height: 300px;
}
}
@media (max-width: 660px){
.containerChef {
  flex-direction: column-reverse;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  padding-top: 50px;
}
.chef{
    height: 300px;
}
.textChef h1{
    font-size: 28px;
}
.textChef .message{
    margin: 20px 0;
    font-size: 12px;
}
.textChef{
    text-align: center;
}
.slogan {
    font-size: 16px;
}
}
</style>
