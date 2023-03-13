"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthOperation = void 0;
const Auth_page_1 = require("../../Pages/Auth/Auth.page");
const AuthOperation = (page) => {
    const authPage = (0, Auth_page_1.AuthenticationPage)(page);
    return {
        loginWithEmail: async (email, password) => {
            await authPage.loginWithEmailBtn().waitForClickable();
            await authPage.loginWithEmailBtn().click();
            await authPage.emailInput().type(email);
            await authPage.passwordInput().type(password);
            await authPage.loginBtn().click();
        }
    };
};
exports.AuthOperation = AuthOperation;
