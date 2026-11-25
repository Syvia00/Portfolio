import { expect, test } from "@playwright/test";

const securityHeaders = ["content-security-policy", "strict-transport-security", "x-frame-options"];

for (const path of ["/", "/what-i-do"]) {
  test(`${path} is live with security headers`, { tag: "@smoke" }, async ({ page }) => {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);

    const headers = await response?.allHeaders();
    for (const name of securityHeaders) {
      expect(headers?.[name]).toBeTruthy();
    }
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });
}
