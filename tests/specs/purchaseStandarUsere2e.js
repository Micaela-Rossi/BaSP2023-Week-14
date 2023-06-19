import { loginProcess, fillForm } from "./functionsReusables";
import { inventory } from "../pageobjects/inventory";
import cart from "../pageobjects/cart";
import checkout from "../pageobjects/checkout";
const credential = require("../credentials");

describe ("Complete flow for a purchase for standard user.", () => {
    beforeAll("Open Browser", async () => {
        browser.setWindowSize(1440, 1024);
        browser.url("https://www.saucedemo.com/")

        const { username, password } = credential.standardUser;
        await loginProcess(username, password);
    });

    it("add items to cart and go to the cart page.", async () => {
        await inventory.addCartBackpackClick();
        await inventory.addCartBikeLightClick();
        await inventory.addCartTshirtRedClick();
        await inventory.addCartJacketClick();
        await inventory.addCartOnesieClick();
        await inventory.addCartTshirtClick();
        await inventory.shoppingCartClick();
        await expect(browser).toHaveUrlContaining("cart");
    });

    it("remove an item and go back to add the item again.", async () => {
        await inventory.removeCartOnesieClick();
        await cart.continueShoppingBtnClick();

        await expect(browser).toHaveUrlContaining("inventory");
        await inventory.addCartOnesieClick();
        await inventory.shoppingCartClick();
        await expect(browser).toHaveUrlContaining("cart");
    })

    it("Finish the purchase and back to the list of items", async () => {
        await cart.checkoutBtnClick();
        await expect(browser).toHaveUrlContaining("step-one");

        await fillForm();
        await checkout.continueBtnClick();
        await expect(browser).toHaveUrlContaining("step-two");

        await checkout.finishBtnClick();
        await expect(browser).toHaveUrlContaining("complete");
        await checkout.backHomeBtnClick();
        await expect(browser).toHaveUrlContaining("inventory");
    })
})

