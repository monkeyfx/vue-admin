<template>
  <div class="layout-container">
    <div class="layout-container-sidebar">
      <slot name="logo"></slot>
      <slot name="sidebar"></slot>
    </div>
    <div>
      <div
        class="layout-container-header"
        :style="{
          width: isCollapse ? 'calc(100vw - 200px)' : 'calc(100vw - 65px)',
          height: isShowTabs ? ' 80px' : ' 50px'
        }"
      >
        <slot name="header"></slot>
        <slot name="tabs"></slot>
      </div>
      <div
        class="layout-container-content"
        v-loading="false"
        :style="{
          width: isCollapse ? 'calc(100vw - 200px)' : 'calc(100vw - 64px)'
        }"
      >
        <el-scrollbar>
          <div
            class="layout-container-content-view"
            :style="{
              height: isShowTabs ? 'calc(100vh - 80px)' : 'calc(100vh - 50px)'
            }"
          >
            <slot name="content"></slot>
          </div>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  components: {},
  computed: {
    ...mapState("layout", ["isCollapse", "isShowTabs"])
  }
};
</script>

<style lang="scss" scoped>
.layout-container {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  /* border: 1px solid #cccccc; */
  .layout-container-header {
    transition: all 0.3s;
    overflow: hidden;
    border-bottom: 1px solid #eee;
    box-shadow: 0 1px 5px #eee;
  }
  .layout-container-content {
    overflow: hidden;
    overflow-y: auto;
    transition: all 0.3s;
    .layout-container-content-view {
      padding: 15px;
    }
  }
}
</style>
