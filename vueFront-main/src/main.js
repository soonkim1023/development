import { createApp } from 'vue'
import App from '@/App.vue'

import axios from "axios";
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';

import dayjs from "dayjs";
/**
 * dayjs 기본언어 ko 세팅
 * */
import 'dayjs/locale/ko';
dayjs.locale('ko');

import store from '@/store'
import router from '@/router'

const app = createApp(App);

/**
 * 전역변수 화
 * 각 컴포넌트 내에서 inject import -> inject(key)으로 inject
 * Composition API
 * */
app.provide('$axios', axios);
app.provide('$dayjs', dayjs);

/**
 * 전역변수 화
 * this.$[alias]로 호출
 * Options API
 * */
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$dayjs = dayjs

app
    .use(store)
    .use(router)

app.mount('#app')