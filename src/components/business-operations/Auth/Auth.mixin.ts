import { Page } from "@playwright/test";

export type Class = new (...args: any[]) => any;

export function Auth<Base extends Class>(base: Base) {
    return class extends base {
        async loginWithEmail (email: string, password: string) {
            await this.loginWithEmailBtn.click();
        }
    }
}

export class AuthMixin extends Auth(class {}) {
    private _page: Page;

    constructor(page: Page) {
        super();
        this._page = page;
    }

    public async loginWithEmail(email: string, password: string): Promise<void> {
        await this._page.locator('').click()
    }
}

