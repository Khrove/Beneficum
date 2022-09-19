"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeViewOperation = void 0;
const Grade_view_1 = require("../../Pages/Explore/Grade.view");
function GradeViewOperation(page) {
    const gradeView = new Grade_view_1.GradeView(page);
    return {
        clickOnModule: async (title) => {
            await gradeView.getModuleTitleByText(title).click();
        },
        areModulesVisible: async () => {
            return gradeView.moduleTitle.isVisible();
        },
        checkGrade: async (grade) => {
            const gradeValue = (await gradeView.subHeaderComp.levelDropdown.innerText()).valueOf();
            if (gradeValue !== grade) {
                await gradeView.subHeaderComp.levelDropdown.click();
                await gradeView.subHeaderComp.getLevelDropdownItem(grade).click();
                await page.waitForLoadState('networkidle');
            }
        }
    };
}
exports.GradeViewOperation = GradeViewOperation;
