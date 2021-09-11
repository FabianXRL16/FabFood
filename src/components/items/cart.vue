<template>
  <div class="cart">
    <avatar-cart />
    <div class="content__cart">
      <div class="content-title">
        <h1 class="title">Title</h1>
        <controls />
      </div>
      <div class="price">
        $ 12.00
      </div>
      <i class="fas fa-times"></i>
    </div>
  </div>
</template>
<script>
import avatarCart from "@/components/items/avatarCart";
import controls from "@/components/inputs/controlsCart";
export default {
  name: "Cart",
  components: {
    avatarCart,
    controls
  },
  data() {
    return {
      img: "https://barradeideas.com/wp-content/uploads/2019/09/fast-food.jpg",
    };
  },
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";
.cart {
  background-color: rgba(46,46,46,.9);
  display: flex;
  padding: 10px 30px;
  border-bottom: 5px solid var(--bg-primary);
  transition: .3s;
  border-radius: 5px;
  margin-bottom: 5px;
  color: var(--gray-ligth);
  transform: scale(.99);
}
.cart:hover{
  background-color: rgba(46,46,46,1);
  transform: scale(1);
  transition: .3s;
}
.cart:last-child {
  margin-bottom: 0;
}
.content__cart {
  width: calc(100% - 60px - 10px);
  margin-left: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content-title{
  display: flex;
  flex-direction: column;
  gap: 5px;
}
h1,
h2 {
  margin: 0;
}
.title{
  font-size: var(--text-title-4);
}
i{
  cursor: pointer;
  transform: scale(1);
  transition: .5s;
}
i:hover{
  transform: scale(1.5);
  transition: .5s;
}
.title p {
  font-size: 12px;
  white-space: nowrap;
  width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
