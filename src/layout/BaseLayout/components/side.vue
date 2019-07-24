<template>
  <el-aside class="side" :style="{ width: !isCollapse ? '200px' : '64px' }">
    <vue-scroll :ops="options">
      <el-menu :collapse="isCollapse" :router="true">
        <menu-component :array="menuConfig" :isCollapse="isCollapse" />
      </el-menu>
    </vue-scroll>
  </el-aside>
</template>
<script>
import { mapState } from "vuex";
import menuConfig from "@/_config/menu.config";
import MenuComponent from "./menu";
export default {
  data() {
    return {
      menuConfig: menuConfig,
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
  components: { MenuComponent },
  computed: { ...mapState("layout", ["isCollapse"]) }
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
