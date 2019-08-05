<template>
  <div
    class="logo"
    :style="{ width: isCollapse ? '200px' : '65px' }"
    v-if="isShowLogo"
  >
    <div class="logo-img">
      <img src="@/assets/logo.png" alt="logo" />
    </div>
    <h1 :style="{ opacity: isCollapse ? '1' : '0' }">VUE ADMIN</h1>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: { ...mapState("layout", ["isCollapse", "isShowLogo"]) }
};
</script>

<style lang="scss">
.logo {
  height: 50px;
  border-bottom: solid 1px #303336;
  border-right: solid 1px #cccccc;
  overflow: hidden;
  display: flex;
  align-items: center;
  white-space: nowrap;
  transition: all 0.3s;
  background-color: #202124;

  & .logo-img {
    width: 63px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 1;
    /* background: #cccccc; */
  }
  & h1 {
    width: calc(100% - 63px);
    font-size: 20px;
    transition: all 0.3s;
    color: #fff;
    /* text-align: center; */
  }
  & img {
    height: 30px;
  }
}
</style>
