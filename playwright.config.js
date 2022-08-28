"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    testDir: './src/tests',
    timeout: 30 * 1000,
    expect: {
        timeout: 5000
    },
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: 'html',
    use: {
        headless: false,
        actionTimeout: 0,
        trace: 'on-first-retry',
    },
};
exports.default = config;
