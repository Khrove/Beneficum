import { Locator } from "@playwright/test";
import { BasePri } from "./Base.pri";

export class ClickablePri extends BasePri {
    async click(options?: string | number) {
        let selector: Locator = this.element;
        if (options) {
            if (typeof options === 'string') {
                selector = this.element.locator('', { hasText: `${options}`});
            }
            else if (typeof options === 'number') {
                selector = this.element.nth(options);
            }
        }
        await selector.click();
    }
}