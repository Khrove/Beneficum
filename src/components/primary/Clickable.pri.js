"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickablePri = void 0;
const Base_pri_1 = require("./Base.pri");
class ClickablePri extends Base_pri_1.BasePri {
    click(options) {
        let selector = this.element;
        if (options) {
            if (typeof options === 'string') {
                selector = this.element.locator('', { hasText: `${options}` });
            }
            else if (typeof options === 'number') {
                selector = this.element.nth(options);
            }
        }
        selector.click();
    }
}
exports.ClickablePri = ClickablePri;
