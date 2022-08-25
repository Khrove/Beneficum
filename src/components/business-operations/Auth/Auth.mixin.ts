export const authMixin = function(object) {
    return Object.assign({}, object, {
        async loginWithEmail(email: string, password: string) {
            await this.loginWithEmailBtn.click();
        }
    })
}

export const nextMixin = function(object) {
    let next = false;
    return Object.assign({}, object, {
        next() {
            next = true;
        },
        goNext() {
            return next;
        }
    });
}

const authOps = authMixin(nextMixin({})).loginWithEmail('test', 'test');