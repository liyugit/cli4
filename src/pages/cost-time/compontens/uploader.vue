<template>
  <div class="mod">
    <v-file-input label="选择插件生成的JSON文件" @change="fileChange" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    fileChange(file) {
      if (file.length) {
        file = file[0];
      }
      let reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => {
        let resource = reader.result;
        try {
          resource = JSON.parse(resource);
          this.$emit("submit", resource);
        } catch (e) {
          console.log(e);
        }
      };

      reader.onerror = () => {
        console.log(reader.error);
      };
    },
  },
};
</script>

<style lang="less" scoped>
.mod {
  display: flex;
  align-items: center;
  height: 100%;
  margin-top: -20%;
}
</style>
