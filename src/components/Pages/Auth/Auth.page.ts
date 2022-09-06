import type { Locator, Page } from "@playwright/test";
import { ClickablePri } from "../../primary/Clickable.pri";
import { InputPri } from "../../primary/Input.pri";

export class AuthenticationPage {
    private _page: Page;
    private _loginWithEmailBtn: ClickablePri;
    private _emailInput: InputPri;
    private _passwordInput: Locator;
    private _loginBtn: Locator;

    constructor(page: Page) {
        this._page = page;
        this._loginWithEmailBtn = new ClickablePri(this._page.locator('button[class*="LoginWithEmail"]'), page);
        this._emailInput = new InputPri(this._page.locator('#email'), page);
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