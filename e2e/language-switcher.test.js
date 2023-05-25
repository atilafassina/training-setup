import { test, expect } from '@playwright/test'

test('should navigate to the about page', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.click('text=es')
  await expect(page).toHaveURL('http://localhost:3000/es')
  await expect(page.locator('h1')).toContainText(
    '¡Esta es la sección de héroes'
  )
})
