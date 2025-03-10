import { test, expect } from '@playwright/test';

test('homepage : has title', async ({ page }) => {
    await page.goto('https://www.trainride.org/index.cfm');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Minnesota Transportation Museum/);
  });

/* test('main menu : link validations', async ({ page }) => {
    await page.goto('https://www.trainride.org/index.cfm');
  
    // Click the get started link.
    await page.getByRole('link', { name: 'TRAIN RIDES' }).click();
  
    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('link', { name: 'Ride the Rails' })).toBeVisible();
}); */


test.beforeEach(async ({ page }) => {
    // Runs before each test and signs in each page.
    await page.goto('https://www.trainride.org/index.cfm');
    await page.getByRole('link', { name: 'TRAIN RIDES' }).click();
  });
  
  test('mm : li_01', async ({ page }) => {
    // main menu should be displayed.
    await expect(page.getByRole('link', { name: 'Ride the Rails' })).toBeVisible();
  });
  
  test('mm : li_02', async ({ page }) => {
    // 
    await expect(page.getByRole('link', { name: 'Excursion Train' })).toBeVisible();
  });
  test('mm : li_03', async ({ page }) => {
    // 
    await expect(page.getByRole('link', { name: 'Pizza Train' })).toBeVisible();
  });
  test('mm : li_04', async ({ page }) => {
    // 
    await expect(page.getByRole('link', { name: 'Wine/Beer Train' })).toBeVisible();
  });
  test('mm : li_05', async ({ page }) => {
    // 
    await expect(page.getByRole('link', { name: 'Ice Cream Train' })).toBeVisible();
  });
  test('mm : li_06', async ({ page }) => {
    // 
    await expect(page.getByRole('link', { name: 'Fall Colors Train' })).toBeVisible();
  });
  test('mm : li_07', async ({ page }) => {
    // 
    await expect(page.getByRole('link', { name: 'Pumpkin Express' })).toBeVisible();
  });
  test('mm : li_08', async ({ page }) => {
    // 
    await expect(page.getByRole('link', { name: 'Private Parties/Charters' })).toBeVisible();
  });


// page design is as follows:
// https://www.trainride.org/index.cfm
// |- Train Rides (8 sub-menu items)
//   |- Ride the rails
//   |- Excursion Train 
//   |- Pizza Train
//   |- Wine/Beer Train
//   |- Ice Cream Train
//   |- Fall Color Train
//   |- Pumpkin Express
//   |- Private Parties/Charters
// |- Museum - (3 sub-menu items)
//   |- Jackson Street Roundhouse
//   |- Birthdays
//   |- Tots & Trains
// |- Donate
// |- More - (3 sub-menu items)
//   |- Volunteer (5 sub-menu items)
//   |- Events
//   |- About us

// Adhock Front Page links:
// Museum Tickets ->
// Train Ride Tickets ->
// Tots & Trains
// Birthday Parties
// Charters & Groups
// Shamrock Express

// Header Validation
// Phone Number
// Facebook
// Instagram
// Youtube

// Footer Validation:
// Phone Us:
// Email Us:
// Mailing Address:
// Find Us:
// Facebook
// Instagram
// Youtube