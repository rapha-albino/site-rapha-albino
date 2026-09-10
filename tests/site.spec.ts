import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("home presents the practice and its primary paths", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Sentido, clareza e intervenções." })).toBeVisible();
  for (const name of ["Prática", "Trajetória", "Livros", "Blog", "Agora", "Contato"]) {
    await expect(page.getByRole("link", { name, exact: true }).first()).toBeVisible();
  }
  await expect(page.locator('link[rel="icon"]')).toHaveAttribute("href", "/favicon.svg");
  await expect(page.getByRole("link", { name: /conhecer a flow climate/i })).toHaveAttribute("href", "https://flowclimate.com.br");
  const primary = page.getByRole("link", { name: "Conheça minha prática" });
  await primary.hover();
  await expect(primary).toHaveCSS("color", "rgb(255, 255, 255)");
});

test("mobile navigation opens deliberately without horizontal overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const menu = page.locator("header").getByRole("button", { name: "Menu" });
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await menu.click();
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("link", { name: "Blog", exact: true })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(390);
});

test("preserves WordPress post slugs", async ({ page }) => {
  await page.goto("/quando-o-trabalho-perde-o-significado/");
  await expect(page.getByRole("heading", { name: "Quando o trabalho perde o significado" })).toBeVisible();
  await expect(page.getByRole("heading", { name: /O crescimento não cria apenas complexidade/i })).toBeVisible();
  await expect(page.locator("article.article > img")).toHaveCount(0);
  await expect(page.getByRole("link", { name: /voltar ao blog/i })).toHaveAttribute("href", "/blog/");
});

test("the blog has its own page and contact uses the public address", async ({ page }) => {
  await page.goto("/blog/");
  await expect(page.getByRole("heading", { name: "Textos para continuar a conversa." })).toBeVisible();
  await expect(page.getByRole("link", { name: "Quando o trabalho perde o significado" })).toBeVisible();
  await expect(page.getByRole("link", { name: /ler texto/i }).first()).toBeVisible();
  await page.goto("/contato/");
  await expect(page.getByRole("link", { name: "Enviar um e-mail" })).toHaveAttribute("href", "mailto:contato@rapha-albino.com.br");
  await expect(page.locator("#conteudo").getByRole("link", { name: "Instagram" })).toHaveAttribute("href", "https://www.instagram.com/rapha_albino/");
});

test("home has no automatically detectable accessibility violations", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
