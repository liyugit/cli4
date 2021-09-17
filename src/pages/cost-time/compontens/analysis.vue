<template>
  <div class="mod">
    <v-container fluid>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <v-select
            v-model="modName"
            attach
            return-object
            :items="items"
            label="选择模块的类型"
          />
        </v-col>
      </v-row>
      <v-data-table
        :headers="headers"
        :items="list"
        :items-per-page="10"
        :sort-by="['cost']"
        :sort-desc="[true]"
        class="elevation-1"
      >
        <template v-slot:[`item.begin`]="{ item }">
          {{ item.begin | formatDate }}
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  props: {
    resource: {
      type: Object,
      default: () => {},
    },
  },
  filters: {
    formatDate(value) {
      if (!value) {
        return "";
      }
      return dayjs(value).format("YYYY-MM-DD HH:mm:ss");
    },
  },
  computed: {
    list() {
      let list = [];
      if (this.resource.srcModules) {
        const modName = this.modName.value;
        if (modName !== "all") {
          list = this.resource[modName];
        } else {
          list = this.resource.srcModules.concat(this.resource.nodeModules);
        }
      }
      return list;
    },
  },
  data() {
    return {
      headers: [
        {
          text: "模块路径",
          value: "path",
        },
        { text: "开始时间", value: "begin" },
        { text: "耗时（毫秒）", value: "cost" },
      ],
      modName: {
        value: "srcModules",
      },
      items: [
        {
          text: "源文件",
          value: "srcModules",
        },
        {
          text: "node-module文件",
          value: "nodeModules",
        },
        {
          text: "全部",
          value: "all",
        },
      ],
    };
  },
};
</script>
