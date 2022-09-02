import 'dotenv/config';
import { expect, test } from '@playwright/test';
import { GradeViewOperation } from '../components/business-operations/explore/Grade.view.operations';
import { AuthOperation } from '../components/business-operations/auth/Auth.operation';

test('Login to Great Minds and move around', async ({ page }) => {
    const teacher = AuthOperation(page);
    const gradeViewOps = GradeViewOperation(page);

    await page.goto(`${process.env.UAT_URL}`);
    await page.waitForLoadState('networkidle');
    await teacher.loginWithEmail('sit_t1_reg1auto@yopmail.com', 'Test@123');
    await page.waitForLoadState('networkidle');
    
    expect(gradeViewOps.areModulesVisible()).toBeTruthy();
    await gradeViewOps.checkGrade('Level 1');
    await gradeViewOps.clickOnModule('Counting, Comparison, and Addition');
  });
