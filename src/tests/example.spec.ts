import 'dotenv/config';
import { expect, test } from '@playwright/test';
import { GradeViewOperation } from '../components/business-operations/explore/Grade.view.operations';
import { AuthOperation } from '../components/business-operations/Auth/Auth.operation';
import { ModuleViewOperations } from "../components/business-operations/explore/Module.view.operations";
import {delay} from "../../utils/CustomFunctions";

test('Login to Great Minds and move around', async ({ page }) => {
    const teacher = AuthOperation(page);
    const gradeViewOps = GradeViewOperation(page);
    const moduleViewOps = ModuleViewOperations(page);

    await page.goto(`${process.env.UAT_URL}`);
    await page.waitForLoadState('domcontentloaded');
    await teacher.loginWithEmail('sit_t1_reg1auto@yopmail.com', 'Test@123');
    await page.waitForLoadState('domcontentloaded');

    expect(gradeViewOps.areModulesVisible()).toBeTruthy();
    await gradeViewOps.isUserOnPage();
    await gradeViewOps.checkGrade('1');
    await gradeViewOps.clickOnModule('Counting, Comparison, and Addition');

    await moduleViewOps.isUserOnPage();
    await moduleViewOps.validateModuleTitle('Counting, Comparison, and Addition');
    await moduleViewOps.clickOnTopicStandards('Count and Compare with Data');
})