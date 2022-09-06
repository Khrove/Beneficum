import { expect, Locator, Page } from "@playwright/test";
import { BoundingRect } from "../../../interfaces/misc.interface";

export abstract class BasePri {
    private _element: Locator;
    private _page: Page;

    constructor(context: Locator, page: Page) {
        this._page = page;
        this._element = (typeof context === 'string') ? this._page.locator(context) : context;
    }

    get element(): Locator {
        return this._element;
    }

    isLocatorEnabled(): Promise<boolean> {
        return this._element.isEnabled();
    }

    async getElementLocation(): Promise<null | BoundingRect> {
        return this._element.boundingBox();
    }

    async isElementOverlapped() {
        const location = await this.getElementLocation();
        const elsAtPoint = await this._page.evaluate(location => {
            return Promise.resolve(document.elementFromPoint(location.x, location.y));
        }, location);
        return elsAtPoint;
    }

    /**
     * @desc Checks to see if an element is clickable
     */
    async waitForClickable() {
        expect(await this._element.isVisible() 
            && await this._element.isEnabled()
            && this._element !== null
            && this._element.hover
        ).toBeTruthy();
        const els = await this.isElementOverlapped();
        console.log(JSON.stringify(els));
    }
}