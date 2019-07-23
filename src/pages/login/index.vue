<template>
  <div class="login-layout">
    <div class="login-form">
      <h3>
        <img src="@/assets/logo.png" alt="logo" />
        <span>后台管理系统</span>
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
  background-image: url("../../assets/background.svg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-color: rgb(41, 44, 47);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  .login-form {
    width: 350px;
    height: 260px;
    background: rgba(255, 255, 255, 0.9);
    padding: 15px;
    border-radius: 5px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    & h3 {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 15px;
      & img {
        height: 20px;
        margin-right: 5px;
      }
    }
  }

  & .submit-btn {
    width: 100%;
  }
}
</style>
