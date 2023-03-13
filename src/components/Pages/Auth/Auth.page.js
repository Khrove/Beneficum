"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationPage = void 0;
const Clickable_pri_1 = require("../../primary/Clickable.pri");
const Input_pri_1 = require("../../primary/Input.pri");
const AuthenticationPage = (page) => {
    const _page = page;
    const loginWithEmailBtn = new Clickable_pri_1.ClickablePri(_page.locator('button[class*="LoginWithEmail"]'), page);
    const emailInput = new Input_pri_1.InputPri(_page.locator('#email'), page);
    const passwordInput = new Input_pri_1.InputPri(_page.locator('#password'), page);
    const loginBtn = new Clickable_pri_1.ClickablePri(_page.locator('[aria-label="Log in"]'), page);
    return {
        loginWithEmailBtn: () => { return loginWithEmailBtn; },
        emailInput: () => { return emailInput; },
        passwordInput: () => { return passwordInput; },
        loginBtn: () => { return loginBtn; }
    };
};
exports.AuthenticationPage = AuthenticationPage;
