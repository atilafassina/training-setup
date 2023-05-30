import { test, expect } from '@playwright/test'

test('has `/about` in Spanish', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  // get by text
  // await page.click('text=About us')

  // get by data-testid
  // await page.getByTestId('about-link').click()

  // get by exact href
  await page.locator('[href="/about"]').click()

  // get by href containing about
  // await page.locator('[href*="about"]').click()

  // get by href ending about
  // await page.locator('[href$="about"]').click()

  /**
   * more attribute selectors
   * https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors
   */

  await page.waitForURL('**/about')

  await expect(page.locator('h1')).toContainText('Hello world')
})
