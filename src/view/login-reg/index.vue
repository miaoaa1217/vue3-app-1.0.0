<template>
  <div class="reg-login">
    <div :class="activeKey=='login'?'login':'reg'">
      <a-tabs v-model:activeKey="activeKey" centered>
        <!-- 注册 -->
        <a-tab-pane key="reg">
          <template #tab>
            注册
          </template>
          <a-form
              ref="regRef"
              :model="regFormState"
              name="basic"
              :label-col="{ span: 6 }"
              :wrapper-col="{ span: 18 }"
              autocomplete="off"
              @finish="onReg"
              @finishFailed="onRegFailed"
          >
            <a-form-item
                label="用户名称"
                name="username"

                :rules="[{ required: true, message: '请输入用户名称！' }]"
            >
              <a-input v-model:value="regFormState.username" placeholder="请输入用户名称"/>
            </a-form-item>

            <a-form-item
                label="用户密码"
                name="password"

                :rules="[{ required: true, message: '请输入用户密码！' }]"
            >
              <a-input-password v-model:value="regFormState.password" placeholder="请输入用户密码"/>
            </a-form-item>
            <a-form-item
                label="用户昵称"
                name="nickname"

            >
              <a-input v-model:value="regFormState.nickname" placeholder="请输入用户昵称"/>
            </a-form-item>
            <a-form-item
                label="手机号"
                name="phone"
            >
              <a-input v-model:value="regFormState.phone" placeholder="请输入手机号"/>
            </a-form-item>
            <a-form-item
                label="邮箱"
                name="email"
            >
              <a-input v-model:value="regFormState.email" placeholder="请输入邮箱"/>
            </a-form-item>
            <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
              <a-space>
                <a-button type="primary" html-type="submit">注册</a-button>
                <a-button @click="onResetReg">重置</a-button>
              </a-space>
            </a-form-item>
          </a-form>
        </a-tab-pane>
        <!-- 登录 -->
        <a-tab-pane key="login">
          <template #tab>
            登录
          </template>
          <a-form
              ref="loginRef"
              :model="loginFormState"
              name="basic"
              :label-col="{ span: 6 }"
              :wrapper-col="{ span: 18 }"
              autocomplete="off"
              @finish="onLogin"
              @finishFailed="onLoginFailed"
          >
            <a-form-item
                label="用户名称"
                name="username"
                :rules="[{ required: true, message: '请输入用户名称！' }]"
            >
              <a-input v-model:value="loginFormState.username" placeholder="请输入用户名称"/>
            </a-form-item>

            <a-form-item
                label="用户密码"
                name="password"
                :rules="[{ required: true, message: '请输入用户密码！' }]"
            >
              <a-input-password v-model:value="loginFormState.password" placeholder="请输入用户密码"/>
            </a-form-item>
            <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
              <a-space>
                <a-button type="primary" html-type="submit">登录</a-button>
                <a-button @click="onResetLogin">重置</a-button>
              </a-space>
            </a-form-item>
          </a-form>
        </a-tab-pane>
      </a-tabs>
      <router-link to="/">首页</router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref, reactive} from 'vue';
import type {FormInstance} from 'ant-design-vue';
import Axios from "axios";

let activeKey = ref('login'); // 激活页面
const regRef = ref<FormInstance>(); // 注册Ref，供重置使用
const loginRef = ref<FormInstance>(); // 登录Ref，供重置使用

// 登录
interface LoginFormState {
  username: string;
  password: string;
}

const loginFormState = reactive<LoginFormState>({
  username: '',
  password: ''
});
const onLogin = (values: any) => {
  Axios.get("/").then((res) => {
    console.log(res)
  }).catch((e) => {
    console.log(e)
  })
};

const onLoginFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
const onResetLogin = () => {
  loginRef.value ? loginRef.value.resetFields() : ""
}

// 注册
interface RegFormState {
  username: string;
  password: string;
  nickname: string,
  phone: string,
  email: string,
}

const regFormState = reactive<RegFormState>({
  username: '',
  password: '',
  nickname: '',
  phone: '',
  email: '',
});
const onReg = (values: any) => {
  console.log('Success:', values);
};

const onRegFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
const onResetReg = () => {
  regRef.value ? regRef.value.resetFields() : "";
}

</script>

<style lang="less">
.reg-login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .login {
    padding: 20px;
    box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, .3);
    border-radius: 10px;
    width: 400px;
    height: 250px;
  }

  .reg {
    padding: 20px;
    box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, .3);
    border-radius: 10px;
    width: 400px;
    height: 420px;
  }
}
</style>