class Inventory {
    get itemsList() {
        return $("#inventory_container");
    };

    get btnAddCartBackpack() {
        return $("#add-to-cart-sauce-labs-backpack");
    };

    get btnAddCartBikeLight() {
        return $("#add-to-cart-sauce-labs-bike-light");
    };

    get btnAddCartTshirtRed() {
        return $("#add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)");
    };

    get btnAddCartJacket() {
        return $("#add-to-cart-sauce-labs-fleece-jacket");
    };

    get btnAddCartOnesie() {
        return $("#add-to-cart-sauce-labs-onesie");
    };

    get btnAddCartTshirt() {
        return $("#add-to-cart-sauce-labs-bolt-t-shirt");
    };

    get btnRemoveBackpack() {
        return $("#remove-sauce-labs-backpack");
    };

    get btnRemoveBikeLight() {
        return $("#remove-sauce-labs-bike-light");
    };

    get btnRemoveTshirtRed() {
        return $("#remove-test\\.allthethings\\(\\)-t-shirt-\\(red\\)");
    };

    get btnRemoveJacket() {
        return $("#remove-sauce-labs-fleece-jacket");
    };

    get btnRemoveOnesie() {
        return $("#remove-sauce-labs-onesie");
    };

    get btnRemoveTshirt() {
        return $("#remove-sauce-labs-bolt-t-shirt");
    };

    get shoppingCartBtn() {
        return $("#shopping_cart_container > a");
    };

    async addCartBackpackClick() {
        await this.btnAddCartBackpack.click();
    };

    async addCartBikeLightClick() {
        await this.btnAddCartBikeLight.click();
    };

    async addCartTshirtRedClick() {
        await this.btnAddCartTshirtRed.click();
    };

    async addCartJacketClick() {
        await this.btnAddCartJacket.click();
    };

    async addCartOnesieClick() {
        await this.btnAddCartOnesie.click();
    };

    async addCartTshirtClick() {
        await this.btnAddCartTshirt.click();
    };

    async removeCartBackpackClick() {
        await this.btnRemoveBackpack.click();
    };

    async removeCartBikeLightClick() {
        await this.btnRemoveBikeLight.click();
    };

    async removeCartTshirtRedClick() {
        await this.btnRemoveTshirtRed.click();
    };

    async removeCartJacketClick() {
        await this.btnRemoveJacket.click();
    };

    async removeCartOnesieClick() {
        await this.btnRemoveOnesie.click();
    };

    async removeCartTshirtClick() {
        await this.btnRemoveTshirt.click();
    };

    async shoppingCartClick() {
        await this.shoppingCartBtn.click();
    };

}

const inventory = new Inventory();

export { inventory };