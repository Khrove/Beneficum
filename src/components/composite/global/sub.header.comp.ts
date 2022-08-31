import { Locator, Page } from "@playwright/test";

export class SubHeaderComp {
    private _page: Page;
    private _levelDropdown: Locator;

    constructor(page: Page) {
        this._page = page;
        this._levelDropdown = page.locator('[aria-controls="menu-courses"] span:nth-child(2) span');
    }

    get levelDropdown() {
        return this._levelDropdown;
    }

    getLevelDropdownItem(item: string) {
        return this._page.locator('[role="menuitem"] span[class*="Prefix"]', { hasText: `${item}` });
    }
}