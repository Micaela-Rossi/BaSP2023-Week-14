import { loginProcess, logoutProcess } from "./functionsReusables";
//const helper = require("./helper");
const credential = require("../credentials");

describe ("Login to the standard user.", () => {
    beforeAll("Open Browser", () => {
        browser.setWindowSize(1440, 1024);
        browser.url("https://www.saucedemo.com/")

    });

    it("Login process.", async () => {
        const { username, password } = credential.standardUser;
        await loginProcess(username, password);
    });

    it("Log out process.", async () => {
        await logoutProcess();
    });
})