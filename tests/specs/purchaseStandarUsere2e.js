import login from "../pageobjects/login";
import { inventory } from "../pageobjects/inventory"
const credential = require("../credentials");

describe ("Login to the standard user.", () => {
    beforeAll("Open Browser", async () => {
        browser.setWindowSize(1440, 1024);
        browser.url("https://www.saucedemo.com/")

        const { username, password } = credential.standardUser;
        await login.fillFields(username, password);
        await login.loginBtnClick();
        await expect(browser).toHaveUrlContaining("inventory");
    });

    it("add items to cart", async () => {
        await inventory.btnAddCartBackpack.waitForDisplayed();
        await inventory.btnAddCartTshirt.waitForDisplayed();
        await inventory.shoppingCartBtn.waitForDisplayed();
        await inventory.addCartBackpackClick();
        await inventory.addCartTshirtClick();
        await inventory.shoppingCartClick();
        await expect(browser).toHaveUrlContaining("cart");
    })
})

