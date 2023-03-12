"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeViewOperation = void 0;
const test_1 = require("@playwright/test");
const Grade_view_1 = require("../../Pages/Explore/Grade.view");
const GradeViewOperation = (page) => {
    const gradeView = (0, Grade_view_1.GradeView)(page);
    return {
        isUserOnPage: async () => {
            await gradeView.moduleTitle().first().waitFor({ state: "visible" });
            await (0, test_1.expect)(page).toHaveURL(/.*grade/);
        },
        clickOnModule: async (title) => {
            await gradeView.getModuleTitleByText(title).click();
        },
        areModulesVisible: async () => {
            return gradeView.moduleTitle().isVisible();
        },
        checkGrade: async (grade) => {
            const gradeValue = (await gradeView.subHeaderComp().levelDropdown().innerText()).valueOf();
            if (gradeValue !== grade) {
                await gradeView.subHeaderComp().levelDropdown().click();
                await gradeView.subHeaderComp().getLevelDropdownItem(grade).click();
                await page.waitForLoadState('domcontentloaded');
            }
        }
    };
};
exports.GradeViewOperation = GradeViewOperation;
