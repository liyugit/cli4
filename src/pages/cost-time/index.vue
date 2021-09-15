<template>
  <div class="page">
    <div class="content">
      <uploader />
      <analysis />
    </div>
  </div>
</template>

<script>
import uploader from "./compontens/uploader.vue";
import analysis from "./compontens/analysis.vue";
export default {
  components: {
    uploader,
    analysis,
  },
};
</script>

<style lang="less" scoped>
.page {
  width: 100%;
  height: 100%;
  .content {
    width: 90%;
    margin: 0 auto;
    height: 100%;
  }
}
</style>
