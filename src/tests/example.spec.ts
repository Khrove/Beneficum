import { test, expect } from '@playwright/test';
import {AuthOperation} from "../components/business-operations/Auth/Auth.operation";
import { AuthenticationPage } from "../components/Pages/Auth/Auth.page";
import {authMixin} from "../components/business-operations/Auth/Auth.mixin";

Object.assign(AuthenticationPage.prototype, authMixin);

test('Login to Great Minds', async ({ page }) => {
  // const authPage = new AuthOperation(page);
  const authPage = new AuthenticationPage(page)

  await page.goto('https://digital.uat.greatminds.dev');
  await authPage.LoginWithEmail('', '');
});
