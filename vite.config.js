import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';

import { resolve } from 'path';

export default defineConfig({
	plugins: [
		vue(),
		eslintPlugin({
			rules: { 'no-unused-vars': 'warn', 'vue/no-unused-vars': 'warn' },
		}),
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
	server: {
		open: true,
	},
});
