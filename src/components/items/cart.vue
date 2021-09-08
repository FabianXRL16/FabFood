<template>
  <div class="cart">
    <div
      class="img"
      style="background-image: url('https://barradeideas.com/wp-content/uploads/2019/09/fast-food.jpg')"
    ></div>
    <div class="content__cart">
      <div class="text">
        <div class="title">
          <h6>Drink</h6>
          <h3>Title asdasd as das d asd a sd as da sdasdasf</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
            consequuntur odit nam mollitia error excepturi.
          </p>
        </div>
        <button>
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
      <div class="content__price">
        <div class="price">
          s/. 12.00
        </div>
        <div class="count">
          <button>-</button>
          <h3>0</h3>
          <button>+</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cart",
  components: {},
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";
.cart {
  padding: 20px;
  background-color: var(--gray-dark);
  display: flex;
  gap: 20px;
  box-sizing: border-box;
  border-radius: 10px;
}
.text {
  display: flex;
  justify-content: space-between;
}
.title {
  width: 80%;
}
.title h6,
.title h3,
.title p {
  margin: 0;
}
.title p {
  font-size: 12px;
}
.title h6,
.title p {
  color: var(--gray-ligth);
}
.title h3 {
  color: var(--white);
}
.text button {
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  transition: .2s;
  margin-bottom: auto;
}
.text button i {
  color: var(--white);
  font-size: 20px;
}
.text button:hover i{
  transition: .2s;
  color: var(--gray-ligth);
}
.content__price {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.content__price .price {
  color: var(--white);
  font-size: 18px;
}
.img {
  height: 130px;
  width: 20%;
  border-radius: 10px;
  background-position: center;
  background-size: cover;
}
.content__cart {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.count {
  display: flex;
}
.count button {
  background-color: var(--bg-primary);
  outline: none;
  border: none;
  cursor: pointer;
  margin: auto 0;
  width: 25px;
  height: 25px;
  border-radius: 12.5px;
  color: var(--white);
  display: grid;
  place-content: center;
  font-weight: bold;
  transition: .2s;
}
.count button:hover {
  background-color: var(--white);
  transition: .2s;
  color: var(--bg-primary);
}
.count h3 {
  margin: 0;
  width: 50px;
  text-align: center;
  color: var(--white);
}
@media (max-width: 820px) {
}
</style>
