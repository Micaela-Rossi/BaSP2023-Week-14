class logout {
    get burguerMenuBtn() {
        return $("#react-burger-menu-btn");
    };

    get logOutBtn() {
        return $("#logout_sidebar_link");
    };

    get navbarDisplayed() {
        return $("#menu_button_container > div > div.bm-menu-wrap > div.bm-menu");
    };

    async burguerMenuBtnClick() {
        await this.burguerMenuBtn.click();
    };

    async logOutBtnClick() {
        await this.logOutBtn.click();
    };
}

export default new logout();