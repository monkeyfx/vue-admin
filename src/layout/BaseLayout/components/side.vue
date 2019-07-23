<template>
  <el-aside class="side" :style="{ width: !isCollapse ? '200px' : '64px' }">
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-menu-item index="2" v-for="item of 30" :key="item">
        <i class="el-icon-menu"></i>
        <span slot="title">导航{{ item }}</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: { ...mapState("layout", ["isCollapse"]) },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss">
.side {
  height: calc(100vh - 50px);
  border-right: solid 1px #e6e6e6;
  transition: all 0.3s;
  & .el-menu {
    border: none;
  }
}
</style>
