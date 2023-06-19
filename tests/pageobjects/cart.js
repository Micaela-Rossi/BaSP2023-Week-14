class cart {
    get continueShoppingBtn() {
        return $("#continue-shopping");
    };

    get checkoutBtn() {
        return $("#checkout");
    };

    get spanCartNumber() {
        return $("#shopping_cart_container > a > span");
    };

    async continueShoppingBtnClick() {
        await this.continueShoppingBtn.click();
    };

    async checkoutBtnClick() {
        await this.checkoutBtn.click();
    };
}

export default new cart();