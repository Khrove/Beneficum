"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeView = void 0;
const sub_header_comp_1 = require("../../composite/global/sub.header.comp");
class GradeView {
    _page;
    _moduleTitle;
    _subHeaderComp;
    constructor(page) {
        this._page = page;
        this._moduleTitle = page.locator('.module-card span');
        this._subHeaderComp = new sub_header_comp_1.SubHeaderComp(page);
    }
    get moduleTitle() {
        return this._moduleTitle;
    }
    get subHeaderComp() {
        return this._subHeaderComp;
    }
    getModuleTitleByText(title) {
        return this._page.locator('.module-card span', { hasText: `${title}` });
    }
}
exports.GradeView = GradeView;
