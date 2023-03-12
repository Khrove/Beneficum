import { expect, Page } from "@playwright/test";
import { GradeView } from "../../Pages/Explore/Grade.view";


export const GradeViewOperation = (page: Page) => {
    const gradeView = GradeView(page);

    return {
        isUserOnPage: async () => {
            await gradeView.moduleTitle().first().waitFor({ state: "visible"});
            await expect(page).toHaveURL(/.*grade/);
        },
        clickOnModule: async (title: string) => {
            await gradeView.getModuleTitleByText(title).click();
        },
        areModulesVisible: async () => {
            return gradeView.moduleTitle().isVisible();
        },
        checkGrade: async (grade: string) => {
            const gradeValue = (await gradeView.subHeaderComp().levelDropdown().innerText()).valueOf();
            if (gradeValue !== grade) {
                await gradeView.subHeaderComp().levelDropdown().click();
                await gradeView.subHeaderComp().getLevelDropdownItem(grade).click();
                await page.waitForLoadState('domcontentloaded');
            }
        }
    }
}