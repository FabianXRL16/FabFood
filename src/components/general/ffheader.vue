<template>
  <div class="ffheader" :class="this.$route.path === '/' ? 'foundHeaderHome' : 'foundHeaderNotHome'">
    <logo />
    <div class="navbar">
      <ffnav class="nav" />
      <orderActions class="order" />
      <buttonMenu @upMenu="up" class="menu" />
    </div>
  </div>
</template>

<script>
import Logo from "../general/logo.vue";
import ffnav from "../general/ffnav.vue";
import orderActions from "../general/orderActions.vue";
import buttonMenu from "../inputs/buttonMenu.vue";

export default {
  name: "Ffheader",
  components: { Logo, ffnav, orderActions, buttonMenu },
  data() {
    return {
      screen: this.minWidth,
    };
  },
  computed: {
    minWidth() {
      return window.innerWidth <= 1160;
    },
  },
  watch: {
    screen: function(val) {
      console.log(val);
    },
  },
  methods: {
    up() {
      this.$emit("menuUp");
    },
  },
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";

.ffheader {
  padding: var(--p-main);
  z-index: 9;
  height: 70px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.foundHeaderNotHome {
  background-color: var(--bg-secondary-light);
}
.foundHeaderHome {
  background-color: transparent;
}
.navbar {
  display: flex;
  gap: 20px;
}
.menu {
  display: none;
}

@media (max-width: 1180px) {
  .nav {
    display: none;
  }
  .menu {
    display: block;
  }
}
@media (max-width: 820px) {
  .ffheader {
    padding: var(--p-main-mobile);
  }
}
@media (max-width: 520px) {
  .order {
    display: none;
  }
}
</style>
