"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubHeaderComp = void 0;
class SubHeaderComp {
    _page;
    _levelDropdown;
    constructor(page) {
        this._page = page;
        this._levelDropdown = page.locator('[aria-controls="menu-courses"] span:nth-child(2) span');
    }
    get levelDropdown() {
        return this._levelDropdown;
    }
    getLevelDropdownItem(item) {
        return this._page.locator('[role="menuitem"] span[class*="Prefix"]', { hasText: `${item}` });
    }
}
exports.SubHeaderComp = SubHeaderComp;
