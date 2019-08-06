<template>
  <el-aside
    class="side"
    id="sidebar"
    :style="{
      width: isCollapse ? '200px' : '65px',
      height: isShowLogo ? ' calc(100vh - 50px)' : '100vh',
      backgroundColor: menuBgColor
    }"
  >
    <el-scrollbar>
      <el-menu
        :collapse="!isCollapse"
        :unique-opened="true"
        :router="true"
        :collapse-transition="false"
        :default-active="menuActive"
        :background-color="menuBgColor"
        :text-color="menuTextColor"
      >
        <menu-component :array="routes" />
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>
<script>
import { mapState } from "vuex";
import { routes } from "@/_config/router.config";
import MenuComponent from "./menu";
export default {
  data() {
    return {
      routes: routes
    };
  },
  components: { MenuComponent },
  computed: {
    ...mapState("layout", [
      "isCollapse",
      "menuActive",
      "isShowLogo",
      "menuBgColor",
      "menuTextColor"
    ])
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
