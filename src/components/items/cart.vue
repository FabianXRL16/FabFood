<template>
  <div class="cart">
    <avatar-cart :img="order.img" />
    <div class="content__cart">
      <div class="content-title">
        <h1 class="title">{{order.id}}</h1>
        <controls @changeCount="changeCount" />
      </div>
      <div class="price">
        $ {{order.price*num}}
      </div>
      <i @click="deleteOrder(order.id)" class="fas fa-times"></i>
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
  props: {
    order: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      num: 1
    };
  },
  methods: {
    changeCount(count) {
      this.num = this.num + count
    },
    deleteOrder(id) {
      this.$store.dispatch("orderNow", id);
      this.$store.dispatch("deleteOrder", id);
      this.$store.dispatch("updateCountOrder");
    }
  }
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";
.cart {
  background-color: rgba(36, 1, 10, 0.3);
  display: flex;
  padding: 10px 30px;
  border-bottom: 5px solid var(--bg-primary);
  max-height: 105px;
  transition: .3s;
  border-radius: 5px;
  margin-bottom: 5px;
  color: var(--gray-ligth);
  transform: scale(.99);
}
.cart:hover{
  background-color:  rgba(36, 1, 10, 1);
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
@media (max-width: 500px){
  .cart {
  padding: 10px 20px;
  }
}
</style>
