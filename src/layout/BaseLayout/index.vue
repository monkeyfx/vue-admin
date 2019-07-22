<!-- admin布局 -->
<template>
  <el-container style="height: 100vh;" id="layout">
    <el-aside class="side" :style="{ width: !isCollapse ? '200px' : '64px' }">
      <div class="logo">
        <div class="logo-img">
          <img src="@/assets/logo.png" alt="logo" />
        </div>
        <h1>后台管理系统</h1>
      </div>
      <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="layout-header">
        <div>
          <div class="isCollapse" @click="isCollapse = !isCollapse">
            <i
              :class="[isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']"
            ></i>
          </div>
        </div>
        <div class="header-right-tools">
          <div class="block">
            <i class="iconfont icon-quanping"></i>
          </div>
          <el-dropdown class="block" trigger="click">
            <span>
              <i class="iconfont icon-conows-in-change "></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>中文</el-dropdown-item>
              <el-dropdown-item>English</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-popover
            class="block"
            placement="bottom"
            width="400"
            trigger="click"
          >
            <div>
              主题
            </div>
            <i class="iconfont icon-zhuti" slot="reference"></i>
          </el-popover>
          <div class="block">
            <img
              src="@/assets/avatar.gif"
              alt="avatar"
              width="35px"
              height="35px"
              style="border-radius:5px"
            />
          </div>
        </div>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true
    };
  },
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
#layout {
  & .el-header {
    color: #333;
    height: 50px !important;
    line-height: 50px;
    border-bottom: solid 1px #e6e6e6;
    display: flex;
    justify-content: space-between;
    padding: 0;
    & .isCollapse {
      font-size: 20px;
      padding: 0 20px;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        background: #eee;
      }
    }
    & .header-right-tools {
      display: flex;
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
      }
    }
  }
  & .side {
    height: 100vh;
    border-right: solid 1px #e6e6e6;
    transition: all 0.3s;
    & .el-menu {
      border: none;
    }
  }
  .logo {
    height: 50px;
    border-bottom: solid 1px #e6e6e6;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    & .logo-img {
      width: 64px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 1;
    }
    & h1 {
      width: calc(100% - 63px);
    }
    & img {
      height: 35px;
    }
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
