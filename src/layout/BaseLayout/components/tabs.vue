<template>
  <div class="layout-tabs">
    <el-tabs v-model="tabsValue"
             type="card"
             closable
             @tab-remove="removeTab">
      <el-tab-pane :key="item.name"
                   v-for="item in tableTabs"
                   :label="item.title"
                   :name="item.name" />
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabsValue: "2",
      tableTabs: [
        {
          title: "Tab 1",
          name: "1"
        }
      ],
      tabIndex: 2
    };
  },
  mounted() {
    this.tableTabs = Object.keys([...new Array(100)]).map(item => ({
      title: `Tabs` + item,
      name: item
    }));
  },
  methods: {
    removeTab() {}
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
}
</style>
