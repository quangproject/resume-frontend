import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // Allows external connections
    port: 5173, // Optional, default is 5173
    allowedHosts: ["resume.quangnd.dev"]
  },
  plugins: [react()]
});
