import { Locator, Page } from "@playwright/test";
import { SubHeaderComp } from "../../composite/global/sub.header.comp";


export class GradeView {
    private _page: Page;
    private _moduleTitle: Locator;
    private _subHeaderComp: SubHeaderComp;

    constructor(page: Page) {
        this._page = page;
        this._moduleTitle = page.locator('.module-card span');
        this._subHeaderComp = new SubHeaderComp(page);
    }

    get moduleTitle() {
        return this._moduleTitle;
    }

    get subHeaderComp() {
        return this._subHeaderComp;
    }

    getModuleTitleByText(title: string) {
        return this._page.locator('.module-card span', { hasText: `${title}`});
    }
}