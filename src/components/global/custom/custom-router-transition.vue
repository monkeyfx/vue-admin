<template>
  <div>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: "custom-router-transition"
};
</script>

<style lang="scss" scoped>
/* 
v-enter: 定义进入过渡的开始状态
v-enter-active: 定义进入活动状态
v-enter-to: 定义进入的结束状态
v-leave: 定义离开过渡的开始状态
v-leave-active: 定义离开活动状态
v-leave-to: 定义离开的结束状态 
*/

/* 进入 */
.fade-enter {
  opacity: 0;
  /* transform: translateX(5%); */
}
.fade-enter-active {
  transition: all 0.5s;
}
.fade-enter-to {
  opacity: 1;
  /* transform: translateX(0); */
}
/* 出去 */
.fade-leave {
  opacity: 0.1;
  /* transform: translateX(-95%); */
}
.fade-leave-active {
  transition: all 0.5s;
}
.fade-leave-to {
  opacity: 0;
  /* transform: translateX(-100%); */
}
</style>
