import { test, expect } from '@playwright/test';
import {AuthOperation} from "../components/business-operations/Auth/Auth.operation";

test('Login to Great Minds', async ({ page }) => {
  const authPage = new AuthOperation(page);

  await page.goto('https://digital.uat.greatminds.dev');
  await authPage.LoginWithEmail();
});
