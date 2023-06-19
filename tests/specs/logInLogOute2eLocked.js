import login from "../pageobjects/login";
// const helper = require("../helper");
const credential = require("../credentials");

describe ("Login to the locked user.", () => {
    beforeAll("Open Browser", () => {
        browser.setWindowSize(1440, 1024);
        browser.url("https://www.saucedemo.com/")

    });

    it("Login process.", async () => {
        const { username, password } = credential.lockedUser;
        await login.fillFields(username, password);
        await login.loginBtnClick();

        await expect(login.lockedIcon).toBeDisplayed();
        await expect(login.errorMessage).toBeDisplayed();
        await expect(login.errorMessage).toHaveTextContaining("locked");
    });
})
