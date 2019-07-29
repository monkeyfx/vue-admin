<template>
  <div>
    <veLine ref="line" />
    <ve-histogram ref="histogram" />
    <ve-bar ref="bar" />
  </div>
</template>
<script>
import veLine from "@/components/v-chart/ve-line";
import veHistogram from "@/components/v-chart/ve-histogram";
import veBar from "@/components/v-chart/ve-bar";
import { mapState } from "vuex";
import { setTimeout } from "timers";

export default {
  components: { veLine, veHistogram, veBar },
  computed: {
    ...mapState("layout", ["isCollapse"])
  },
  watch: {
    isCollapse() {
      this.$nextTick(() => {
        setTimeout(() => {
          this.$refs["line"].$refs["line"].echarts.resize();
          this.$refs["histogram"].$refs["histogram"].echarts.resize();
          this.$refs["bar"].$refs["bar"].echarts.resize();
        }, 300);
      });
    }
  }
};
</script>
