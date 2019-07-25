<template>
  <div class="layout-tabs">
    <el-tabs v-model="tabsValue" type="card" closable @tab-remove="removeTab">
      <el-tab-pane
        v-for="item in historys"
        :key="item.path"
        :label="item.title"
        :name="item.path"
      />
    </el-tabs>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      tabsValue: this.$route.path
    };
  },
  watch: {
    tabsValue(path) {
      this.$router.push(path);
    },
    $route({ path }) {
      this.tabsValue = path;
    }
  },
  computed: {
    ...mapState("layout", ["historys"])
  },
  methods: {
    removeTab() {
      console.log(1);
    }
  }
};
</script>
<style lang="scss">
.layout-tabs {
  /* margin-top: 50px; */
  height: 30px;
  overflow: hidden;
  width: 100%;
  & .el-tabs--card > .el-tabs__header .el-tabs__nav {
    border-radius: 0 !important;
  }
  & .el-tabs__header {
    margin: 0;
  }
  & .el-tabs--card > .el-tabs__header .el-tabs__nav {
    border: none;
    border-right: 1px solid #e4e7ed;
  }
  & .el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
    border-left: 1px solid #e4e7ed;
  }
  & .el-tabs__item,
  .el-tabs__nav-next,
  .el-tabs__nav-prev {
    height: 30px;
    line-height: 30px;
  }
  & .el-tabs__nav-next,
  .el-tabs__nav-prev {
    transition: all 0.3s;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background: #eee;
    }
  }
  & .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  & .el-tabs__item:first-child .el-icon-close {
    display: none;
  }
}
</style>
