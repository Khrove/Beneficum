import { Locator } from "@playwright/test";
import { BasePri } from "./Base.pri";

export class InputPri extends BasePri {
    async type(text: string) {
        let selector: Locator = this.element;
        await selector.type(text);
    }
}