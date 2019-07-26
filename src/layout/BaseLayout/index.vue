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
        <router-transition />
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
import RouterTransition from "@/components/RouterTransition";
export default {
  components: {
    Layout,
    HeaderComponent,
    LogoComponent,
    SideComponent,
    TabsComponent,
    RouterTransition
  }
};
</script>
