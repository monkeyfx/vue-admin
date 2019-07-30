<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">
      {{ $t("menu.HomePage") }}
    </el-breadcrumb-item>
    <transition-group name="fade" mode="out-in">
      <el-breadcrumb-item v-for="item of breadcrumbs" :key="item.path">
        {{ $t(item.title) }}
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("layout", ["breadcrumbs"])
  }
};
</script>

<style scoped>
/* 进入 */
.fade-enter {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
  transition: all 1s;
}
</style>
