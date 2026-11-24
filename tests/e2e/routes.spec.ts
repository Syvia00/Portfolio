import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = [
  { path: "/", heading: "About" },
  { path: "/what-i-do", heading: "What I Do" },
  { path: "/side-quests", heading: "Side Quests" },
  { path: "/no-such-page", heading: "Page not found" },
];

for (const { path, heading } of routes) {
  test(`${path} loads and has no serious accessibility problems`, async ({ page }) => {
    await page.goto(path);
    await expect(page.getByRole("heading", { level: 1, name: heading })).toBeVisible();

    const results = await new AxeBuilder({ page }).analyze();
    const serious = results.violations.filter(
      (violation) => violation.impact === "serious" || violation.impact === "critical",
    );
    expect(serious).toEqual([]);
  });
}
