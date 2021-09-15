<template>
  <div class="mod">
    <v-file-input label="选择插件生成的JSON文件" @change="fileChange" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      resoureData: {},
    };
  },
  methods: {
    fileChange(files) {
      files;
    },
  },
};
</script>

<style lang="less" scoped>
.mod {
  display: flex;
  align-items: center;
  height: 100%;
}
</style>
