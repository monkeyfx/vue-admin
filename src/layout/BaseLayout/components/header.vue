<template>
  <el-header
    class="layout-header"
    :style="{
      backgroundColor: headerBgColor
    }"
  >
    <div class="layout-header-left">
      <div class="isCollapse" @click="SET_IS_COLLAPSE(!isCollapse)">
        <i :class="[isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold']"></i>
      </div>
      <breadcrumbfrom-component />
    </div>
    <div class="header-right-tools">
      <div class="block">
        <i :class="['iconfont', screenfullIcon]" @click="handleScreenFull"></i>
      </div>
      <el-dropdown class="block" trigger="click" @command="handleCommand">
        <span style="height:20px">
          <i class="iconfont icon-in "></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="cn" :disabled="$i18n.locale === 'cn'"
            >中文</el-dropdown-item
          >
          <el-dropdown-item command="en" :disabled="$i18n.locale === 'en'"
            >English</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
      <!--  -->
      <div class="block color-picker">
        <ThemePicker />
      </div>
      <!--  -->
      <div class="block">
        <drawer />
      </div>
      <!--  -->
      <el-dropdown
        class="block avatar"
        trigger="click"
        @command="handleCommandPersonal"
      >
        <img
          src="@/assets/WechatIMG74_gaitubao_800x800.jpg"
          alt="avatar"
          width="35px"
          height="35px"
          style="border-radius:5px"
        />
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="PROJECT_ADDRESS"
            >项目地址</el-dropdown-item
          >
          <el-dropdown-item command="LOGON_OUT">退出登陆</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
import BreadcrumbfromComponent from "./breadcrumb";
import { mapMutations, mapState, mapActions } from "vuex";
import * as screenfull from "screenfull";
import ThemePicker from "./theme";
import Drawer from "./drawer";

export default {
  data() {
    return {
      color: "#409eff",
      screenfullIcon: "icon-quanping"
    };
  },
  components: {
    BreadcrumbfromComponent,
    ThemePicker,
    Drawer
  },
  computed: {
    ...mapState("layout", ["isCollapse", "headerBgColor"])
  },
  methods: {
    ...mapMutations("layout", ["SET_IS_COLLAPSE"]),
    ...mapActions("auth", ["ASYNC_LOGIN_OUT"]),
    //  切换语言
    handleCommand(lang) {
      this.$i18n.locale = lang;
      localStorage["lang"] = lang;
    },
    // 是否全屏
    handleScreenFull() {
      screenfull.toggle();
    },
    // 个人中心
    handleCommandPersonal(type) {
      if (type === "PROJECT_ADDRESS") {
        window.open("https://github.com/linronglang/vue-admin");
      }
      if (type === "LOGON_OUT") {
        this["ASYNC_LOGIN_OUT"]();
      }
    }
  },
  mounted() {
    if (screenfull.enabled) {
      screenfull.on("change", () => {
        this.screenfullIcon = !screenfull.isFullscreen
          ? "icon-quanping"
          : "icon-quanping1";
      });
    }
  }
};
</script>

<style lang="scss">
.layout-header.el-header {
  color: #333;
  height: 50px !important;
  border-bottom: 1px solid #eee !important;
  padding: 0;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .layout-header-left {
    display: flex;
    align-items: center;
  }
  & .isCollapse {
    font-size: 20px;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background: #eee;
    }
  }
  & .header-right-tools {
    display: flex;
    align-items: center;
    margin-right: 10px;
    & .block {
      display: flex;
      height: 50px;
      width: 50px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s;
      & i {
        display: inline-block;
        color: #000;
        height: 20px;
        width: 20px;
        font-size: 18px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      /* &:hover {
        color: #409eff;
      } */
      & .el-color-picker__trigger {
        border: none;
      }
      & .el-color-picker__color {
        border: none;
      }
    }
  }
}
</style>
