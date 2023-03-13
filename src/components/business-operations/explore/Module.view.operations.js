"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleViewOperations = void 0;
const test_1 = require("@playwright/test");
const Module_view_1 = require("../../Pages/Explore/Module.view");
const topic_comp_1 = require("../../composite/explore/topic.comp");
const ModuleViewOperations = (page) => {
    const moduleView = (0, Module_view_1.ModuleView)(page);
    const topicComp = (0, topic_comp_1.TopicComp)(page);
    return {
        isUserOnPage: async () => {
            await moduleView.moduleTitle().waitFor({ state: "visible" });
            await (0, test_1.expect)(page).toHaveURL(/.*module/);
        },
        validateModuleTitle: async (title) => {
            const moduleTitle = (await moduleView.moduleTitle().innerText()).valueOf();
            (0, test_1.expect)(moduleTitle).toEqual(title);
        },
        clickOnTopicStandards: async (topic) => {
            await topicComp.topicStandardBtn(topic).click();
        },
        clickOnModuleOverviewBtn: async (topic) => {
            await topicComp.topicOverviewBtn(topic).click();
        }
    };
};
exports.ModuleViewOperations = ModuleViewOperations;
