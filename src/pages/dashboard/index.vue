<template>
  <div>
    <veLine ref="line" />
  </div>
</template>
<script>
import veLine from "@/components/v-chart/ve-line";
import { mapState } from "vuex";

export default {
  components: { veLine },
  computed: {
    ...mapState("layout", ["isCollapse"])
  },
  watch: {
    isCollapse() {
      this.$nextTick(() => {
        setTimeout(() => {
          this.$refs["line"].$refs["line"].echarts.resize();
        }, 300);
      });
    }
  }
};
</script>
