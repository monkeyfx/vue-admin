<template>
  <Layout>
    <template #logo>
      <LogoComponent />
    </template>
    <template #sidebar>
      <SideComponent />
    </template>
    <template #header>
      <HeaderComponent />
    </template>
    <template #tabs>
      <TabsComponent />
    </template>
    <template #content>
      <keep-alive>
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </keep-alive>
    </template>
  </Layout>
</template>
<script>
import HeaderComponent from "./components/header";
import Layout from "./components/index";
import LogoComponent from "./components/logo";
import SideComponent from "./components/side";
import TabsComponent from "./components/tabs";
export default {
  components: {
    Layout,
    HeaderComponent,
    LogoComponent,
    SideComponent,
    TabsComponent
  }
};
</script>
<style lang="scss">
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
