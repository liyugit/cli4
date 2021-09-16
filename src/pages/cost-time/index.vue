<template>
  <div class="page v-application">
    <div class="content">
      <v-stepper outlined v-model="step">
        <v-stepper-header>
          <v-stepper-step :complete="step > 1" :step="1">
            上传文件
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="step > 2" :step="2">
            用时统计
          </v-stepper-step>
          <v-divider></v-divider>
        </v-stepper-header>
        <v-stepper-items class="steper-items">
          <v-stepper-content step="1">
            <uploader @submit="uploaderSubmit" />
          </v-stepper-content>
          <v-stepper-content step="2">
            <analysis :resource="resource" />
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
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
  data() {
    return {
      step: 1,
    };
  },
  methods: {
    uploaderSubmit(data) {
      data;
      debugger;
      this.resource = data.srcModules;
      this.step = 2;
    },
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
    ::v-deep .v-stepper {
      height: 100%;
      .v-stepper__content {
        height: 100%;
        .v-stepper__wrapper {
          height: 100%;
        }
      }
    }
    ::v-deep .theme--light.v-sheet--outlined {
      border: none;
    }
    .steper-items {
      margin-top: 20px;
      height: 100%;
    }
  }
}
</style>
