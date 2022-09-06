import { Page, expect } from "@playwright/test";
import { AuthenticationPage } from "../../Pages/Auth/Auth.page";

export function AuthOperation(page: Page) {
    const authPage = new AuthenticationPage(page);
    return {
        loginWithEmail: async (email: string, password: string) => {
            expect(authPage.randomBtn.isLocatorClickable()).toBeTruthy();
            authPage.loginWithEmailBtn.click();
            await authPage.emailInput.type(email);
            await authPage.passwordInput.type(password);
            await authPage.loginBtn.click();
        }
    }
}