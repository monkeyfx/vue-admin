<template>
  <div class="empty">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "custom-empty",
  props: {
    icon: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.empty {
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
}
</style>
