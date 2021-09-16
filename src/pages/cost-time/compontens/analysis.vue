<template>
  <div class="mod">
    <v-data-table
      :headers="headers"
      :items="resource"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: Array,
      default: () => [],
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
      list: [],
    };
  },
};
</script>
