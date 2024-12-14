import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { execSync } from 'child_process';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), {
		name: 'copy-locales',
		buildEnd() {
		  execSync('cp -r ./locales ./dist');
		},
	  },],
	base: "/",
},   
);
