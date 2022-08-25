import type { Locator, Page } from "@playwright/test";

export class AuthenticationPage {
    private _page: Page;
    private _loginWithEmailBtn: Locator;

    constructor(page: Page) {
        this._page = page;
        this._loginWithEmailBtn = page.locator('button[class*="LoginWithEmail"]');
    }

    get loginWithEmailBtn() {
        return this._loginWithEmailBtn;
    }
}