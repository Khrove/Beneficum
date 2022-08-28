import type { Locator, Page } from "@playwright/test";

export class AuthenticationPage {
    private _page: Page;
    private _loginWithEmailBtn: Locator;
    private _emailInput: Locator;
    private _passwordInput: Locator;

    constructor(page: Page) {
        this._page = page;
        this._loginWithEmailBtn = page.locator('button[class*="LoginWithEmail"]');
        this._emailInput = page.locator('#email');
        this._passwordInput = page.locator('#password');
    }

    get loginWithEmailBtn() {
        return this._loginWithEmailBtn;
    }

    get emailInput() {
        return this._emailInput;
    }

    get passwordInput() {
        return this._passwordInput;
    }
}