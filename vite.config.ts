import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

import tsconfigPaths from "vite-tsconfig-paths";


const configs = defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
  ],
  optimizeDeps: {
    include: ["@emotion/styled"]
  },
  server: { port: 3006 },
  preview: { port: 3006 }
});

export default configs;
