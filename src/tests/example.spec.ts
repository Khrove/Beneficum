import 'dotenv/config';
import { test, expect } from '@playwright/test';
import { AuthOperation } from '../components/business-operations/auth/Auth.operation';
import { GradeViewOperation } from '../components/business-operations/explore/Grade.view.operations';
import { delay } from '../../utils/CustomFunctions';

test('Login to Great Minds', async ({ page }) => {
  const teacher = AuthOperation(page);
  const gradeViewOperation = GradeViewOperation(page);

  await page.goto(`${process.env.UAT_URL}`);
  await page.waitForLoadState('networkidle');
  await teacher.loginWithEmail('sit_t1_reg1auto@yopmail.com', 'Test@123');
  await page.waitForLoadState('networkidle');
  expect(gradeViewOperation.areModulesVisible()).toBeTruthy();
  await gradeViewOperation.clickOnModule('Counting, Comparison, and Addition');
});
