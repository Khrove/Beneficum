"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const test_1 = require("@playwright/test");
const Grade_view_operations_1 = require("../components/business-operations/explore/Grade.view.operations");
const Auth_operation_1 = require("../components/business-operations/Auth/Auth.operation");
(0, test_1.test)('Login to Great Minds and move around', async ({ page }) => {
    const teacher = (0, Auth_operation_1.AuthOperation)(page);
    const gradeViewOps = (0, Grade_view_operations_1.GradeViewOperation)(page);
    await page.goto(`${process.env.UAT_URL}`);
    await page.waitForLoadState('networkidle');
    await teacher.loginWithEmail('sit_t1_reg1auto@yopmail.com', 'Test@123');
    await page.waitForLoadState('networkidle');
    (0, test_1.expect)(gradeViewOps.areModulesVisible()).toBeTruthy();
    await gradeViewOps.checkGrade('Level 1');
    await gradeViewOps.clickOnModule('Counting, Comparison, and Addition');
});
