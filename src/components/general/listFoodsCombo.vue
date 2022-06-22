<template>
  <div class="listFoodsCombo">
    <h2>{{ combosName }}</h2>
    <div class="content__item" v-for="food in $store.state.combos[currentBanner].foods" :key="food.id">
      <div class="item__text">
        <div class="title">
          <h3>{{ food.id }}</h3>
          <p :class="food.showDescription ? '' : 'textNoWrap'">
            {{ food.description }}
          </p>
        </div>
        <button class="btn btnDescription" @click="food.showDescription = !food.showDescription">
          <i :class="food.showDescription ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"></i>
        </button>
      </div>
      <h3 class="item__price">${{ food.price }}</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "listFoodsCombo",
  props: {
    currentBanner: {
      type: Number,
      default: 0
    }
  },
  computed: {
    foods() {
      return this.$store.state.combos[this.currentBanner].foods
    },
    combosName() {
      return this.$store.state.combos[this.currentBanner].id
    }
  },
  data() {
    return {
      combo: {
        name: "Foods Special",
        showDescriptions: [
          false, false, false, false
        ]
      },
    };
  },
};
</script>
<style scoped>
.listFoodsCombo h2 {
  color: var(--white);
  margin-top: 0;
  font-size: var(--text-title-2);
}

.content__item {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 10px;
}

.content__item:last-child {
  margin-bottom: 0;
}

.item__text {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.item__text .title h3 {
  color: var(--bg-primary);
  margin: 0;
}

.fa-chevron-down,
.fa-chevron-up {
  font-size: 10px;
  color: var(--bg-primary);
}

.btnDescription {
  background-color: transparent;
  height: 28px;
}

.item__text p {
  margin-top: 0;
  font-size: var(--text-subtitle-1);
  color: var(--gray-ligth);
  text-align: justify;
}

.textNoWrap {
  width: calc(100vw - 830px);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.item__price {
  text-align: end;
  width: 80px;
  color: var(--bg-primary);
  font-size: var(--text-title-3);
}

@media (max-width: 1180px) {
  .textNoWrap {
    width: calc(100vw - 380px);
  }
}

@media (max-width: 820px) {
  .textNoWrap {
    width: calc(100vw - 200px);
  }

  .item__price {
    font-size: var(--text-title-4);
    width: 50px;
  }
}
</style>
