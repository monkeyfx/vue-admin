<template>
  <div
    class="logo"
    :style="{
      width: isCollapse ? '201px' : '66px',
      backgroundColor: logoBgColor,
      borderBottomColor: logoBorderBottomColor,
      borderRightColor: logoBorderRightColor
    }"
    v-if="isShowLogo"
  >
    <div class="logo-img">
      <img src="@/assets/logo.png" alt="logo" />
    </div>
    <h1 :style="{ opacity: isCollapse ? '1' : '0', color: logoTextColor }">
      VUE ADMIN
    </h1>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("layout", [
      "isCollapse",
      "isShowLogo",
      "logoBgColor",
      "logoBorderBottomColor",
      "logoBorderRightColor",
      "logoTextColor"
    ])
  }
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
