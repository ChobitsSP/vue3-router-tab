<template>
  <el-container>
    <el-main class="a-main">
      <router-view v-slot="{ Component }"
                   :key="$route.fullPath">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </el-main>
  </el-container>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {

    },
  });
</script>

<style scoped>
</style>