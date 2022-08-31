import 'dotenv/config';
import { test, expect } from '@playwright/test';
import { AuthOperation } from '../components/business-operations/Auth/Auth.operation';

test('Login to Great Minds', async ({ page }) => {
  const teacher = AuthOperation(page);
  await page.goto(`${process.env.UAT_URL}`);
  await page.waitForLoadState('networkidle');
  await teacher.loginWithEmail('sit_t1_reg1auto@yopmail.com', 'Test@123');

  await page.waitForLoadState('networkidle');
});
