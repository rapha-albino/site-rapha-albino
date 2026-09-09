import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("home presents the practice and its primary paths", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Sentido, clareza e intervenções." })).toBeVisible();
  for (const name of ["Prática", "Trajetória", "Escrita", "Agora", "Contato"]) {
    await expect(page.getByRole("link", { name, exact: true }).first()).toBeVisible();
  }
  await expect(page.getByRole("link", { name: /conhecer a flow climate/i })).toHaveAttribute("href", "https://flowclimate.com.br");
});

test("preserves WordPress post slugs", async ({ page }) => {
  await page.goto("/quando-o-trabalho-perde-o-significado/");
  await expect(page.getByRole("heading", { name: "Quando o trabalho perde o significado" })).toBeVisible();
  await expect(page.getByRole("heading", { name: /O crescimento não cria apenas complexidade/i })).toBeVisible();
});

test("home has no automatically detectable accessibility violations", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
