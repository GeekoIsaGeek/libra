import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from '@/router';
import { createPinia } from 'pinia';
import { i18n } from '@/config/i18n.js';

const pinia = createPinia();

createApp(App).use(i18n).use(pinia).use(router).mount('#app');
