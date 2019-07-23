<template>
  <vue-scroll :ops="ops">
    <slot />
  </vue-scroll>
</template>
<script>
export default {
  data() {
    return {
      ops: {
        bar: {
          background: "#000000",
          opacity: "0.5",
          minSize: 0.1
        },
        rail: {
          size: "3px"
        }
      }
    };
  }
};
</script>
