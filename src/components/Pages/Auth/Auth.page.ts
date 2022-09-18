import type { Locator, Page } from "@playwright/test";
import { ClickablePri } from "../../primary/Clickable.pri";
import { InputPri } from "../../primary/Input.pri";

export const AuthenticationPage = (page: Page) => {
    const _page: Page = page;
    const loginWithEmailBtn: ClickablePri = new ClickablePri(_page.locator('button[class*="LoginWithEmail"]'), page); 
    const emailInput = new InputPri(_page.locator('#email'), page);
    const passwordInput = new InputPri(_page.locator('#password'), page);
    const loginBtn = new ClickablePri(_page.locator('[aria-label="Log in"]'), page);

    return {
        loginWithEmailBtn: () => { return loginWithEmailBtn; },
        emailInput: () => { return emailInput; },
        passwordInput: () => { return passwordInput; },
        loginBtn: () => { return loginBtn; }
    }
}