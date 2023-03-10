import { createApp } from 'vue'
import './style.less'
import App from './App.vue'
import Router from "./router";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
createApp(App).use(Router).use(Antd).mount('#app')
