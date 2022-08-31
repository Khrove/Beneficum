import { expect, Page } from "@playwright/test";
import { GradeView } from "../../Pages/Explore/Grade.view";


export function GradeViewOperation(page: Page) {
    const gradeView = new GradeView(page);
    return {
        clickOnModule: async (title: string) => {
            await gradeView.getModuleTitleByText(title).click();
        },
        areModulesVisible: async () => {
            return gradeView.moduleTitle.isVisible();
        }
    }
}