import login from "../pageobjects/login";

// const helper = require("../helper");
const credential = require("../credentials");

describe ("Login to the glitched user and log out.", () => {
    beforeAll("Open Browser", () => {
        browser.setWindowSize(1440, 1024);
        browser.url("https://www.saucedemo.com/")

    });

    it("Login process.", async () => {
        const { username, password } = credential.glitchedUser;
        await login.fillFields(username, password);
        await login.loginBtnClick();
        await expect(browser).toHaveUrlContaining("inventory");
    });
})
