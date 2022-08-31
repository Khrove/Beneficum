import type { Locator, Page } from "@playwright/test";

export class AuthenticationPage {
    private _loginWithEmailBtn: Locator;
    private _emailInput: Locator;
    private _passwordInput: Locator;
    private _loginBtn: Locator;

    constructor(page: Page) {
        this._loginWithEmailBtn = page.locator('button[class*="LoginWithEmail"]');
        this._emailInput = page.locator('#email');
        this._passwordInput = page.locator('#password');
        this._loginBtn = page.locator('[aria-label="Log in"]')
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

    get loginBtn() {
        return this._loginBtn;
    }
}