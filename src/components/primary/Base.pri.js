"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePri = void 0;
const test_1 = require("@playwright/test");
class BasePri {
    _element;
    _page;
    constructor(context, page) {
        this._page = page;
        this._element = (typeof context === 'string') ? this._page.locator(context) : context;
    }
    get element() {
        return this._element;
    }
    isLocatorEnabled() {
        return this._element.isEnabled();
    }
    async getElementLocation() {
        return this._element.boundingBox();
    }
    async isElementOverlapped() {
        const location = await this.getElementLocation();
        const elsAtPoint = await this._page.evaluate(location => {
            console.log('location:' + location);
            return Promise.resolve(document.elementFromPoint(location.x, location.y));
        }, location);
        return elsAtPoint;
    }
    /**
     * @desc Checks to see if an element is clickable by first validating the element is visible, enabled, not null, and is hoverable
     */
    async waitForClickable() {
        (0, test_1.expect)(await this._element.isVisible()
            && await this._element.isEnabled()
            && this._element !== null
            && this._element.hover).toBeTruthy();
        const els = await this.isElementOverlapped();
        console.log(JSON.stringify(els));
    }
}
exports.BasePri = BasePri;
