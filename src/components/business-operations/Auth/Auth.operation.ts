import { Page } from "@playwright/test";
import { AuthenticationPage } from "../../Pages/Auth/Auth.page";

export function AuthOperation(page: Page) {
    const authPage = new AuthenticationPage(page);
    return {
        loginWithEmail: async (email: string, password: string) => {
            await authPage.loginWithEmailBtn.click();
            await authPage.emailInput.type(email);
            await authPage.passwordInput.type(password);
        }
    }
}