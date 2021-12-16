import { createApp, h } from 'vue';
import App from './App.vue';

import { routes } from './routes.js';
import { createRouter, createWebHistory } from 'vue-router';

import './tailwind.css';

import PerfectScrollbar from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';

import Toast from 'vue3-toast-single';
import 'vue3-toast-single/dist/toast.css';

console.tag = 'Crypto-App |';

const app = createApp({
	render: () => h(App),
});

const router = createRouter({
	history: createWebHistory(),
	routes,
});

app.use(router);
app.use(PerfectScrollbar);
app.use(Toast, {
	className: 'toast',
	verticalPosition: 'top',
	horizontalPosition: 'right',
	duration: 3000,
	transition: 'slide-right',
});

app.mount('#app');
