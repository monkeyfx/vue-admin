<template>
  <LayoutComponent>
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
      <custom-router-transition />
    </template>
  </LayoutComponent>
</template>
<script>
import HeaderComponent from "./components/header";
import LayoutComponent from "./components/index";
import LogoComponent from "./components/logo";
import SideComponent from "./components/side";
import TabsComponent from "./components/tabs";
export default {
  components: {
    LayoutComponent,
    HeaderComponent,
    LogoComponent,
    SideComponent,
    TabsComponent
  }
};
</script>
