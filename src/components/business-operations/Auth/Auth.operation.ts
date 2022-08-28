import {AuthenticationPage} from "../../Pages/Auth/Auth.page";
import {Page} from "@playwright/test";

export class AuthOperation {
    private _page: Page;
    private authPage: AuthenticationPage;

    constructor(page: Page) {
        this._page = page;
        this.authPage = new AuthenticationPage(this._page);
    }

    public async loginWithEmail(email: string, password: string) {
        await this.authPage.loginWithEmailBtn.click();
        await this.authPage.emailInput.type(email);
        await this.authPage.passwordInput.type(password);
    }
}