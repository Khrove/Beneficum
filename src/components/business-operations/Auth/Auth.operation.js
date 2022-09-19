"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthOperation = void 0;
const Auth_page_1 = require("../../Pages/Auth/Auth.page");
function AuthOperation(page) {
    const authPage = new Auth_page_1.AuthenticationPage(page);
    return {
        loginWithEmail: async (email, password) => {
            await authPage.loginWithEmailBtn.waitForClickable();
            authPage.loginWithEmailBtn.click();
            await authPage.emailInput.type(email);
            await authPage.passwordInput.type(password);
            await authPage.loginBtn.click();
        }
    };
}
exports.AuthOperation = AuthOperation;
