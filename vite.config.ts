import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ...existing code...
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Escucha en todas las interfaces
    port: 5173,
  },
});
// ...existing code...
