<template>
  <div class="cardHome">
    <slot />
    <h2 class="principles">{{ data.name }}</h2>
    <p>
      {{ data.description }}
    </p>
  </div>
</template>

<script>
export default {
  name: "cardHome",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped>
.cardHome {
  width: 300px;
  color: var(--white);
  text-align: center;
}
.principles {
  margin: 0;
}
</style>
