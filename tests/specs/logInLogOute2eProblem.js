import { logoutProcess } from "./functionsReusables";
// const helper = require("../helper");
import login from "../pageobjects/login";
const credential = require("../credentials");

describe ("Login to the problem user and log out.", () => {
    beforeAll("Open Browser", () => {
        browser.setWindowSize(1440, 1024);
        browser.url("https://www.saucedemo.com/")

    });

    it("Login process.", async () => {
        const { username, password } = credential.problemUser;
        await login.loginProcess(username, password);
    });

    it("Log out process.", async () => {
        await logoutProcess();
    });
})