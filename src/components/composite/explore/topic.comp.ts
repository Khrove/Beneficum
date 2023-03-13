import { Locator, Page } from "@playwright/test";

export const TopicComp = (page: Page) => {
    const _page: Page = page;
    const _topicContainer: Locator = _page.locator('.topic-container');

    return {
        topicStandardBtn: (topic: string) => {
            return _topicContainer
                .filter({ hasText: topic })
                .getByRole('button', { name: 'Standards'});
        },
        topicOverviewBtn: (topic: string) => {
            return _topicContainer
                .filter({ hasText: topic })
                .getByRole('button', { name: 'Topic Overview'});
        }
    }
}