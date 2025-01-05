import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react()],
	server: {
		port: 3035
	},
	define: {
		APP_VERSION: JSON.stringify(process.env.npm_package_version)
	}
});
