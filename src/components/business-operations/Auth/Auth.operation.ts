import {AuthenticationPage} from "../../Pages/Auth/Auth.page";
import {Page} from "@playwright/test";

export class AuthOperation {
    private _page: Page;
    private authPage: AuthenticationPage;

    constructor(page: Page) {
        this._page = page;
        this.authPage = new AuthenticationPage(this._page);
    }

    public async LoginWithEmail() {
        await this.authPage.loginWithEmailBtn.click();
    }
}