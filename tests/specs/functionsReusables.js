import login from "../pageobjects/login";
import logout from "../pageobjects/logout";
import checkout from "../pageobjects/checkout";


export async function loginProcess(username, password) {
  await login.fillFields(username, password);
  await login.loginBtnClick();
  await expect(browser).toHaveUrlContaining("inventory");
}

export async function logoutProcess() {
  await logout.burguerMenuBtn.waitForDisplayed();
  await logout.burguerMenuBtnClick();
  await logout.navbarDisplayed.waitForDisplayed();
  await logout.logOutBtn.waitForDisplayed();
  await logout.logOutBtnClick();
  await expect(browser).toHaveUrlContaining("saucedemo");
}

export async function fillForm() {
  await checkout.firstNameInputFill();
  await checkout.lastNameInputFill();
  await checkout.postalCodeInputFill();
}