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
          width: !isCollapse ? 'calc(100vw - 200px)' : 'calc(100vw - 64px)'
        }"
      >
        <slot name="header"></slot>
        <slot name="tabs"></slot>
      </div>
      <div class="layout-container-content" v-loading="false">
        <vue-scroll :ops="options">
          <div class="layout-container-content-view">
            <slot name="content"></slot>
          </div>
        </vue-scroll>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      options: {
        bar: {
          background: "#000000",
          opacity: "0.5",
          minSize: 0.1
        },
        rail: {
          size: "5px"
        }
      }
    };
  },
  computed: {
    ...mapState("layout", ["isCollapse"])
  }
};
</script>

<style lang="scss" scoped>
.layout-container {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  border: 1px solid #cccccc;
  .layout-container-header {
    transition: all 0.3s;
    height: 80px;
    overflow: hidden;
    border-bottom: 1px solid #cccccc;
  }
  .layout-container-content {
    height: calc(100vh - 80px);
    overflow: hidden;
    overflow-y: auto;
    .layout-container-content-view {
      padding: 15px;
    }
  }
}
</style>
