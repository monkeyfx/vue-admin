<template>
  <el-aside
    class="side"
    id="sidebar"
    :style="{
      width: isCollapse ? '200px' : '64px',
      height: isShowLogo ? ' calc(100vh - 50px)' : '100vh'
    }"
  >
    <el-scrollbar>
      <el-menu
        :collapse="!isCollapse"
        :router="true"
        :collapse-transition="false"
        :unique-opened="false"
        :default-active="menuActive"
      >
        <menu-component :array="menuConfig" />
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>
<script>
import { mapState } from "vuex";
import menuConfig from "@/_config/menu.config";
import MenuComponent from "./menu";
export default {
  data() {
    return {
      menuConfig: menuConfig
    };
  },
  components: { MenuComponent },
  computed: {
    ...mapState("layout", ["isCollapse", "menuActive", "isShowLogo"])
  }
};
</script>

<style lang="scss">
.side {
  border-right: solid 1px #cccccc;
  transition: all 0.3s;
  overflow-x: hidden;

  & .el-menu {
    border: none;
    overflow-x: hidden;
  }
}
</style>
