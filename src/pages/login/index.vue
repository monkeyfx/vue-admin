<template>
  <div class="login-layout">
    <div class="login-layout-container">
      <div class="left">
        <img src="@/assets/login_bg.jpeg" alt="" />
      </div>
      <div class="login-form">
        <h3>
          <img src="@/assets/logo.png" alt="logo" />
          <span>VUE ADMIN</span>
        </h3>
        <el-form :model="from" :rules="rules" status-icon ref="ruleForm">
          <el-form-item prop="phone">
            <el-input
              size="small"
              type="password"
              prefix-icon="el-icon-user"
              placeholder="请输入账号"
              v-model="from.phone"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              size="small"
              type="password"
              prefix-icon="el-icon-lock"
              placeholder="请输入密码"
              v-model="from.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-button
            size="small"
            :loading="loading"
            class="submit-btn"
            type="primary"
            @click="submitForm('ruleForm')"
            >提交
          </el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      from: {
        phone: "",
        password: ""
      },
      rules: {
        phone: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  computed: {
    ...mapState("auth", ["loading"])
  },
  methods: {
    ...mapActions("auth", ["ASYNC_LOGIN"]),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.ASYNC_LOGIN(JSON.stringify(this.from), this.$route);
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.login-layout {
  /* background-image: url("../../assets/background.svg");
  background-size: 100% 100%;
  background-repeat: no-repeat; */
  /* background-color: #202124; */
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-layout-container {
    display: flex;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0 20px #333333;
    .left {
      width: 350px;
      height: 500px;
      & img {
        height: 100%;
        width: 100%;
      }
    }
    .login-form {
      width: 350px;
      height: 500px;
      /* background: rgba(255, 255, 255, 1); */
      background: repeating-linear-gradient(45deg, #fff, transparent 100px);
      padding: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      & h3 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        /* color: #fff; */
        & img {
          height: 20px;
          margin-right: 5px;
        }
      }
    }
    .el-form-item {
      margin-bottom: 20px;
    }
    & .submit-btn {
      width: 100%;
    }
  }
}
</style>
