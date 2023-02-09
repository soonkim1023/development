import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import axios from "axios";
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// import store from '@/store'
import router from '@/router/index'

const app = createApp(App);

app.provide('$axios', axios);

app
    .use(router)

app.mount('#app')
