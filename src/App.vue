<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts">
  import zhCn from "element-plus/lib/locale/lang/zh-cn";
  import { defineComponent } from "vue";

  export default defineComponent({
    setup() {
      // 切换为中文
      let locale = zhCn;

      return {
        locale,
      };
    },
  });
</script>