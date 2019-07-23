<template>
  <el-header class="layout-header">
    <div class="layout-header-left">
      <div class="isCollapse" @click="SET_IS_COLLAPSE(!isCollapse)">
        <i :class="[isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']"></i>
      </div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="header-right-tools">
      <div class="block">
        <i class="iconfont icon-quanping"></i>
      </div>
      <el-dropdown class="block" trigger="click" @command="handleCommand">
        <span>
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
          <swatches-component
            colors="text-advanced"
            popover-to="left"
            inline
            v-model="color"
          />
        </div>
        <i class="iconfont icon-zhuti" slot="reference"></i>
      </el-popover>
      <el-dropdown class="block" trigger="click">
        <img
          src="@/assets/avatar.gif"
          alt="avatar"
          width="35px"
          height="35px"
          style="border-radius:5px"
        />
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>中文</el-dropdown-item>
          <el-dropdown-item>English</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
import "vue-swatches/dist/vue-swatches.min.css";
import SwatchesComponent from "vue-swatches";
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      color: ""
    };
  },
  components: {
    SwatchesComponent
  },
  computed: {
    ...mapState("layout", ["isCollapse"])
  },
  methods: {
    ...mapMutations("layout", ["SET_IS_COLLAPSE"]),

    handleCommand(lang) {
      this.$i18n.locale = lang;
    }
  }
};
</script>

<style lang="scss">
.layout-header.el-header {
  color: #333;
  height: 50px !important;
  border-bottom: solid 1px #e6e6e6;
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
      height: 100%;
      align-items: center;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        background: #eee;
      }
      & .icon-conows-in-change {
        font-size: 20px;
        padding: 0 15px;
      }
      & .icon-zhuti {
        font-size: 20px;
        padding: 0 15px;
      }
      & .icon-quanping {
        padding: 0 15px;
      }
      & .avatar {
        padding: 0 15px;
      }
    }
  }
}
</style>
