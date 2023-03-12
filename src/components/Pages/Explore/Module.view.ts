import { Locator, Page } from '@playwright/test';
import {ClickablePri} from "../../primary/Clickable.pri";

export const ModuleView = (page: Page) => {
    const _page: Page = page;
    const _moduleTitle: Locator = _page.locator('h2[class*="Title"]');
    const _moduleOverviewBtn: ClickablePri = new ClickablePri(_page.locator('[data-dp-analytics-id*="ModuleOverview"]'), _page);
    const _moduleStandardsBtn: ClickablePri = new ClickablePri(_page.locator('[data-dp-analytics-id*="ModuleStandards"]'), _page);

    return {
        url: () => { return 'explore/grade/module?' },
        moduleTitle: () => { return _moduleTitle },
        moduleOverviewBtn: () => { return _moduleOverviewBtn },
        moduleStandardsBtn: () => { return _moduleStandardsBtn },
        topicOverviewBtn: (topic: string) => {
            return new ClickablePri(_page.locator(`a[data-dp-analytics-id$="${topic}"]`), _page);
        },
        topicStandardsBtn: (topic: number) => {
            return new ClickablePri(_page.locator('.topic-standards-button').nth(topic), _page);
        }
    }
}