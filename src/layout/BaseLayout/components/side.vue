<template>
  <el-aside class="side" :style="{ width: !isCollapse ? '200px' : '64px' }">
    <vue-scroll :ops="options">
      <el-menu @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <!-- ------------------------------------------------- -->
        <router-link to="/admin">
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
        </router-link>
        <router-link to="/about">
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </router-link>

        <!-- ------------------------------------------------- -->
      </el-menu>
    </vue-scroll>
  </el-aside>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      options: {
        bar: {
          background: "#000000",
          opacity: "0.5",
          minSize: 0.1
        },
        rail: {
          size: "3px"
        }
      }
    };
  },
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
  border-right: solid 1px #cccccc;
  transition: all 0.3s;
  & .el-menu {
    border: none;
    overflow-x: hidden;
  }
}
</style>
