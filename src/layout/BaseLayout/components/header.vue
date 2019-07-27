<template>
  <el-header class="layout-header">
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
          <i class="iconfont icon-conows-in-change "></i>
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
      <el-popover class="block" placement="bottom" trigger="click">
        <div>
          1
        </div>
        <i class="iconfont icon-zhuti" slot="reference"></i>
      </el-popover>
      <el-dropdown class="block avatar" trigger="click">
        <img
          src="@/assets/avatar.gif"
          alt="avatar"
          width="35px"
          height="35px"
          style="border-radius:5px"
        />
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出登陆</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
import BreadcrumbfromComponent from "./breadcrumb";
import { mapMutations, mapState } from "vuex";
import * as screenfull from "screenfull";

export default {
  data() {
    return {
      color: "",
      screenfullIcon: "icon-quanping"
    };
  },
  components: {
    BreadcrumbfromComponent
  },
  computed: {
    ...mapState("layout", ["isCollapse"])
  },
  methods: {
    ...mapMutations("layout", ["SET_IS_COLLAPSE"]),

    handleCommand(lang) {
      this.$i18n.locale = lang;
    },
    handleScreenFull() {
      screenfull.toggle();
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
  border-bottom: solid 1px #cccccc;
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
        height: 20px;
        width: 20px;
        font-size: 20px;
        /* border: 1px solid #000; */
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &:hover {
        color: #409eff;
      }
      & .iconfont {
      }
    }
  }
}
</style>
