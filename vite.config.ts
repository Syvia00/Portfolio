import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    // Playwright specs live in tests/e2e; Vitest only runs unit tests next to their source.
    include: ["src/**/*.test.ts"],
  },
});
