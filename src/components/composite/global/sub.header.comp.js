"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubHeaderComp = void 0;
const Clickable_pri_1 = require("../../primary/Clickable.pri");
const SubHeaderComp = (page) => {
    const _page = page;
    const _levelDropdown = _page.locator('[aria-controls="menu-courses"] span:nth-child(2) span');
    return {
        levelDropdown: () => { return _levelDropdown; },
        getLevelDropdownItem: (item) => {
            return new Clickable_pri_1.ClickablePri(_page.locator(`li[class*="NavMenu"] a[data-dp-analytics-id$="em2.g${item}"]`), _page);
        }
    };
};
exports.SubHeaderComp = SubHeaderComp;
