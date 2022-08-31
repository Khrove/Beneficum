import { Locator, Page } from "@playwright/test";


export class GradeView {
    private _page: Page;
    private _moduleTitle: Locator;

    constructor(page: Page) {
        this._page = page;
        this._moduleTitle = page.locator('.module-card span');
    }

    get moduleTitle() {
        return this._moduleTitle;
    }

    getModuleTitleByText(title: string) {
        return this._page.locator('.module-card span', { hasText: `${title}`});
    }
}