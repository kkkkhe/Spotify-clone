import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePluginFonts } from "vite-plugin-fonts";
import * as path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginFonts({
      google: {
        families: ["Source Sans Pro"],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
