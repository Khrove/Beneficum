import type { Locator, Page } from "@playwright/test";

export abstract class BasePri {
    private _element: Locator;
    private _page: Page;

    constructor(context: Locator, page: Page) {
        this._page = page;
        this._element = (typeof context === 'string') ? this._page.locator(context) : context;
    }

    get element(): Locator {
        return this._element;
    }

    isLocatorEnabled(): Promise<boolean> {
        return this._element.isEnabled();
    }

    async isLocatorClickable(): Promise<boolean> {
        return (await this._element.isEnabled() && await this._element.isVisible()) ? true : false;
    }
}