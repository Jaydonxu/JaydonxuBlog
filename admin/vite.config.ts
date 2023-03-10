import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const config = loadEnv(mode, "./");
  return {
    plugins: [vue()],
    config,
  };
});
