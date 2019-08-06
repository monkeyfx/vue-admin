<template>
  <div class="color-content">
    <div class="content-block">
      <p>{{ $t("customColor.menu-background-color") }}</p>
      <div class="active">
        <el-input
          size="medium"
          readonly
          :value="menuBgColor"
          @click.native="onInputClick('menuBgColor')"
        ></el-input>
        <div style="width:10px"></div>
        <el-color-picker
          size="medium"
          ref="menuBgColor"
          v-model="menuBgColor"
        ></el-color-picker>
      </div>
    </div>
    <!--  -->
    <div class="content-block">
      <p>{{ $t("customColor.menu-text-color") }}</p>
      <div class="active">
        <el-input
          size="medium"
          readonly
          :value="menuTextColor"
          @click.native="onInputClick('menuTextColor')"
        ></el-input>
        <div style="width:10px"></div>
        <el-color-picker
          size="medium"
          ref="menuTextColor"
          v-model="menuTextColor"
        ></el-color-picker>
      </div>
    </div>
    <!--  -->
    <div class="content-block">
      <p>{{ $t("customColor.logo-background-color") }}</p>
      <div class="active">
        <el-input
          size="medium"
          readonly
          :value="logoBgColor"
          @click.native="onInputClick('logoBgColor')"
        ></el-input>
        <div style="width:10px"></div>
        <el-color-picker
          size="medium"
          ref="logoBgColor"
          v-model="logoBgColor"
        ></el-color-picker>
      </div>
    </div>
    <!--  -->
    <div class="content-block">
      <p>{{ $t("customColor.logo-text-color") }}</p>
      <div class="active">
        <el-input
          size="medium"
          readonly
          :value="logoTextColor"
          @click.native="onInputClick('logoTextColor')"
        ></el-input>
        <div style="width:10px"></div>
        <el-color-picker
          size="medium"
          ref="logoTextColor"
          v-model="logoTextColor"
        ></el-color-picker>
      </div>
    </div>
    <div class="content-block">
      <p>{{ $t("customColor.logo-border-bottom-color") }}</p>
      <div class="active">
        <el-input
          size="medium"
          readonly
          :value="logoBorderBottomColor"
          @click.native="onInputClick('logoBorderBottomColor')"
        ></el-input>
        <div style="width:10px"></div>
        <el-color-picker
          size="medium"
          ref="logoBorderBottomColor"
          v-model="logoBorderBottomColor"
        ></el-color-picker>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    menuBgColor: {
      get() {
        return this.$store.state.layout.menuBgColor;
      },
      set(value) {
        this.$store.dispatch("layout/ACTIONS_SIDE_COLOR", {
          key: "menuBgColor",
          value
        });
      }
    },
    menuTextColor: {
      get() {
        return this.$store.state.layout.menuTextColor;
      },
      set(value) {
        this.$store.dispatch("layout/ACTIONS_SIDE_COLOR", {
          key: "menuTextColor",
          value
        });
      }
    },
    logoTextColor: {
      get() {
        return this.$store.state.layout.logoTextColor;
      },
      set(value) {
        this.$store.dispatch("layout/ACTIONS_SIDE_COLOR", {
          key: "logoTextColor",
          value
        });
      }
    },
    logoBgColor: {
      get() {
        return this.$store.state.layout.logoBgColor;
      },
      set(value) {
        this.$store.dispatch("layout/ACTIONS_SIDE_COLOR", {
          key: "logoBgColor",
          value
        });
      }
    },
    logoBorderBottomColor: {
      get() {
        return this.$store.state.layout.logoBorderBottomColor;
      },
      set(value) {
        this.$store.dispatch("layout/ACTIONS_SIDE_COLOR", {
          key: "logoBorderBottomColor",
          value
        });
      }
    }
  },
  methods: {
    onInputClick(ref) {
      this.$refs[ref] && this.$refs[ref].handleTrigger();
    }
  }
};
</script>

<style lang="scss">
.color-content {
  padding: 15px;
  & .content-block {
    & p {
      padding: 15px 2px;
    }
    & .active {
      display: flex;
    }
    & .el-color-picker__trigger {
      border: 1px solid #e6e6e6 !important;
    }
  }
}
</style>
