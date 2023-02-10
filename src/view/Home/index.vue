<template>
  <div class="home">
    <a-layout>
      <a-layout-header>
        <router-link to="/login">登录/注册</router-link>
      </a-layout-header>
      <a-layout>
        <a-layout-sider class="layout-sider" width="220">
          <a-menu
              v-model:selectedKeys="selectedKeys"
              mode="inline"
          >
            <a-menu-item key="home">
              <router-link to="/home">首页</router-link>
            </a-menu-item>
            <a-menu-item key="album">
              <router-link to="/album">相册管理</router-link>
            </a-menu-item>
            <a-menu-item key="brand">
              <router-link to="/brand">品牌管理</router-link>
            </a-menu-item>
          </a-menu>
        </a-layout-sider>
        <a-layout-content>
          <router-view/>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const selectedKeys = ref<string[]>(['home']);
</script>

<style lang="less" scoped>
.home {
  width: 100vw;
  height: 100vh;

  .layout-sider {
    height: 100%;
  }
}
</style>

<style>
.ant-layout {
  width: 100% !important;
  height: 100% !important;
}
</style>
