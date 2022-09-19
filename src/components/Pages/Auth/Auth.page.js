"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationPage = void 0;
const Clickable_pri_1 = require("../../primary/Clickable.pri");
const Input_pri_1 = require("../../primary/Input.pri");
class AuthenticationPage {
    _page;
    _loginWithEmailBtn;
    _emailInput;
    _passwordInput;
    _loginBtn;
    constructor(page) {
        this._page = page;
        this._loginWithEmailBtn = new Clickable_pri_1.ClickablePri(this._page.locator('button[class*="LoginWithEmail"]'), page);
        this._emailInput = new Input_pri_1.InputPri(this._page.locator('#email'), page);
        this._passwordInput = page.locator('#password');
        this._loginBtn = page.locator('[aria-label="Log in"]');
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
exports.AuthenticationPage = AuthenticationPage;
