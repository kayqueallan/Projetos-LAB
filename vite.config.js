import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
  },
  esbuild: {
    loader: "jsx",
    include: /\.jsx$/,
    exclude: /node_modules/,
  },
});
