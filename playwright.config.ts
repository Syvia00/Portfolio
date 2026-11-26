import { defineConfig, devices } from "@playwright/test";

const siteUrl = process.env.SITE_URL;
const baseURL = siteUrl || "http://localhost:4173";

export default defineConfig({
  testDir: "tests/e2e",
  use: { baseURL },
  // Screenshot tests also freeze the clock with page.clock.setFixedTime(); Playwright has no config option for it.
  expect: {
    toHaveScreenshot: { animations: "disabled" },
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox", use: { ...devices["Desktop Firefox"] } },
    { name: "webkit", use: { ...devices["Desktop Safari"] } },
  ],
  // With SITE_URL set (smoke test after deploy), tests run against the live site and no local server starts.
  webServer: siteUrl
    ? undefined
    : {
        command: "npm run build && npm run preview -- --port 4173 --strictPort",
        url: baseURL,
      },
});
