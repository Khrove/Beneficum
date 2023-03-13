"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicComp = void 0;
const TopicComp = (page) => {
    const _page = page;
    const _topicContainer = _page.locator('.topic-container');
    return {
        topicStandardBtn: (topic) => {
            return _topicContainer
                .filter({ hasText: topic })
                .getByRole('button', { name: 'Standards' });
        },
        topicOverviewBtn: (topic) => {
            return _topicContainer
                .filter({ hasText: topic })
                .getByRole('button', { name: 'Topic Overview' });
        }
    };
};
exports.TopicComp = TopicComp;
