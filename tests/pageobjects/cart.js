class cart {
    get continueShoppingBtn() {
        return $("#continue-shopping");
    };

    get checkoutBtn() {
        return $("#checkout");
    };

    async continueShoppingBtnClick() {
        await this.continueShoppingBtn.click();
    };

    async checkoutBtnClick() {
        await this.checkoutBtn.click();
    };
}

export default new cart();