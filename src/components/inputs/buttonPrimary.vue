<template>
  <button v-text="title" />
</template>

<script>
export default {
  name: "ButtonPrimary",
  props: {
    title: {
      type: String,
      default: ""
    }
  },
};
</script>
