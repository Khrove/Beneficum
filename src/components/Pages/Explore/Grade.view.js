"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeView = void 0;
const sub_header_comp_1 = require("../../composite/global/sub.header.comp");
const GradeView = (page) => {
    const _page = page;
    const moduleTitle = _page.locator('.module-card span');
    const subHeaderComp = (0, sub_header_comp_1.SubHeaderComp)(page);
    return {
        url: () => { return '/explore/curricula/grade?'; },
        moduleTitle: () => { return moduleTitle; },
        subHeaderComp: () => { return subHeaderComp; },
        getModuleTitleByText: (title) => {
            return _page.locator('.module-card span', { hasText: `${title}` });
        }
    };
};
exports.GradeView = GradeView;
