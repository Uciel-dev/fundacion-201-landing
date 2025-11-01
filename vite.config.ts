import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/fundacion-201-landing/", // ← Agrega esta línea
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
});
