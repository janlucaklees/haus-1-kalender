import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	base: '/haus-1-kalender/',
	plugins: [ react() ],
	build: {
		outDir: 'dist',
		emptyOutDir: true,
	},
});
