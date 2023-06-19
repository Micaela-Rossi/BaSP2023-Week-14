import logout from "../pageobjects/logout";

export async function logoutProcess() {
  await logout.burguerMenuBtn.waitForDisplayed();
  await logout.burguerMenuBtnClick();
  await logout.navbarDisplayed.waitForDisplayed();
  await logout.logOutBtn.waitForDisplayed();
  await logout.logOutBtnClick();
  await expect(browser).toHaveUrlContaining("saucedemo");
}
