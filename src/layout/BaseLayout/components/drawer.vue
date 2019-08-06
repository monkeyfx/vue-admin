<template>
  <div id="custom-setting">
    <i class="iconfont icon-outline" @click="drawer = true"></i>
    <el-drawer
      title="自定义设置"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
      size="300px"
    >
      <drawer-content />
    </el-drawer>
  </div>
</template>

<script>
import DrawerContent from "./drawer-content";
export default {
  data() {
    return {
      drawer: false,
      direction: "rtl"
    };
  },
  components: {
    DrawerContent
  },
  methods: {
    handleClose(done) {
      done();
    }
  }
};
</script>

<style lang="scss">
#custom-setting {
  & .icon-outline {
    width: 25px !important;
    height: 25px !important;
    font-size: 25px !important;
    cursor: pointer;
  }
}
</style>
