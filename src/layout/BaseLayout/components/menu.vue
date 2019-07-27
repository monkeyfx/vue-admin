<template>
  <fragment>
    <template v-for="item in array">
      <el-submenu v-if="item.children" :index="item.path" :key="item.path">
        <template slot="title">
          <i :class="item.icon"></i>
          <span slot="title">{{ $t(item.title) }}</span>
        </template>
        <!--  -->
        <menu-tree :array="item.children" />
      </el-submenu>
      <!--  -->
      <el-menu-item v-else :index="item.path" :key="item.path">
        <i :class="item.icon"></i>
        <span slot="title">{{ $t(item.title) }}</span>
      </el-menu-item>
    </template>
  </fragment>
</template>

<script>
export default {
  name: "MenuTree",
  props: { array: Array }
};
</script>
