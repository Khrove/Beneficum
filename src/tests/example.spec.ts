import 'dotenv/config';
import { test } from '@playwright/test';
import { AuthOperation } from '../components/business-operations/Auth/Auth.operation';

test('Login to Great Minds', async ({ page }) => {
  const authOperation = new AuthOperation(page);

  await page.goto(`${process.env.UAT_URL}`);
  await authOperation.loginWithEmail('sit_t1_reg1auto@yopmail.com', 'Test@123');
});
