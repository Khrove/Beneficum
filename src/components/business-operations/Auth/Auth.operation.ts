import { Page, expect } from "@playwright/test";
import { AuthenticationPage } from "../../Pages/Auth/Auth.page";

export const AuthOperation = (page: Page) => {
    const authPage = AuthenticationPage(page);
    return {
        loginWithEmail: async (email: string, password: string) => {
            await authPage.loginWithEmailBtn().waitForClickable();
            await authPage.loginWithEmailBtn().click();
            await authPage.emailInput().type(email);
            await authPage.passwordInput().type(password);
            await authPage.loginBtn().click();
        }
    }
}