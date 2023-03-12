import { expect, Page } from "@playwright/test";
import { ModuleView } from "../../Pages/Explore/Module.view";
import {TopicComp} from "../../composite/explore/topic.comp";

export const ModuleViewOperations = (page: Page) => {
    const moduleView = ModuleView(page);
    const topicComp = TopicComp(page);

    return {
        isUserOnPage: async () => {
            await moduleView.moduleTitle().waitFor({ state: "visible" });
            await expect(page).toHaveURL(/.*module/);
        },
        validateModuleTitle: async (title: string) => {
            const moduleTitle = (await moduleView.moduleTitle().innerText()).valueOf();
            expect(moduleTitle).toEqual(title);
        },
        clickOnTopicStandards: async (topic: string) => {
            await topicComp.topicStandardBtn(topic).click()
        },
        clickOnModuleOverviewBtn: async (topic: string) => {
            await topicComp.topicOverviewBtn(topic).click();
        }
    }
}