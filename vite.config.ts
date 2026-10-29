import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwind from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

import mdsvexConfig from './mdsvex.config.js';

export default defineConfig({
	plugins: [
		sveltekit({
			adapter: adapter({
				runtime: 'nodejs24.x',
			}),
			preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
			extensions: ['.svelte', ...(mdsvexConfig.extensions ?? [])],
			alias: {
				'@/*': './src/*',
			},
		}),
		tailwind(),
	],
	server: {},
	assetsInclude: ['**/*.md'],
	resolve: {},
});
