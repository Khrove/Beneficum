"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputPri = void 0;
const Base_pri_1 = require("./Base.pri");
class InputPri extends Base_pri_1.BasePri {
    async type(text) {
        let selector = this.element;
        await selector.type(text);
    }
}
exports.InputPri = InputPri;
