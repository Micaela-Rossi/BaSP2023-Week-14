import { logoutProcess } from "./functionsReusables";
import { inventory } from "../pageobjects/inventory";
import cart from "../pageobjects/cart";
import checkout from "../pageobjects/checkout";
import login from "../pageobjects/login";
const credential = require("../credentials");

describe ("Complete flow for a purchase for standard user.", () => {
    beforeAll("Open Browser", async () => {
        browser.setWindowSize(1440, 1024);
        browser.url("https://www.saucedemo.com/")

        const { username, password } = credential.standardUser;
        await login.loginProcess(username, password);
    });

    it("add items to cart and go to the cart page.", async () => {
        let cartCount = 1;

        await inventory.addCartBackpackClick();
        await expect(cart.spanCartNumber).toHaveText(cartCount.toString());

        cartCount++;

        await inventory.addCartBikeLightClick();
        await expect(cart.spanCartNumber).toHaveText(cartCount.toString());

        cartCount++;

        await inventory.addCartTshirtRedClick();
        await expect(cart.spanCartNumber).toHaveText(cartCount.toString());

        cartCount++;

        await inventory.addCartJacketClick();
        await expect(cart.spanCartNumber).toHaveText(cartCount.toString());

        cartCount++;

        await inventory.addCartOnesieClick();
        await expect(cart.spanCartNumber).toHaveText(cartCount.toString());

        cartCount++;

        await inventory.addCartTshirtClick();
        await expect(cart.spanCartNumber).toHaveText(cartCount.toString());

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
    });

    it("Finish the purchase and back to the list of items", async () => {
        await cart.checkoutBtnClick();
        await expect(browser).toHaveUrlContaining("step-one");

        await checkout.fillForm();
        await checkout.continueBtnClick();
        await expect(browser).toHaveUrlContaining("step-two");

        await checkout.finishBtnClick();
        await expect(browser).toHaveUrlContaining("complete");
        await checkout.backHomeBtnClick();
        await expect(browser).toHaveUrlContaining("inventory");
    });

    it("Log out", async () => {
        await logoutProcess();
    });
})

