<template>
  <div>
    <ffheader />
    <ffcontent />
  </div>
</template>

<script>
import ffheader from "@/components/general/ffheader.vue";
import ffcontent from "@/components/general/ffcontent.vue";
export default {
  name: "Loyout",
  components: {
    ffheader,
    ffcontent
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
