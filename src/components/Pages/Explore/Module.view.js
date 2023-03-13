"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleView = void 0;
const Clickable_pri_1 = require("../../primary/Clickable.pri");
const ModuleView = (page) => {
    const _page = page;
    const _moduleTitle = _page.locator('h2[class*="Title"]');
    const _moduleOverviewBtn = new Clickable_pri_1.ClickablePri(_page.locator('[data-dp-analytics-id*="ModuleOverview"]'), _page);
    const _moduleStandardsBtn = new Clickable_pri_1.ClickablePri(_page.locator('[data-dp-analytics-id*="ModuleStandards"]'), _page);
    return {
        url: () => { return 'explore/grade/module?'; },
        moduleTitle: () => { return _moduleTitle; },
        moduleOverviewBtn: () => { return _moduleOverviewBtn; },
        moduleStandardsBtn: () => { return _moduleStandardsBtn; },
        topicOverviewBtn: (topic) => {
            return new Clickable_pri_1.ClickablePri(_page.locator(`a[data-dp-analytics-id$="${topic}"]`), _page);
        },
        topicStandardsBtn: (topic) => {
            return new Clickable_pri_1.ClickablePri(_page.locator('.topic-standards-button').nth(topic), _page);
        }
    };
};
exports.ModuleView = ModuleView;
