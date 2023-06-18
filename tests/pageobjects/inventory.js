class Inventory {
    get btnAddCartBackpack() {
        return $("#add-to-cart-sauce-labs-backpack");
    };

    get btnAddCartBikeLight() {
        return $("#add-to-cart-sauce-labs-bike-light");
    };

    get btnAddCartTshirt() {
        return $("#add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)");
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

    async addCartTshirtClick() {
        await this.btnAddCartTshirt.click();
    };

    async shoppingCartClick() {
        await this.shoppingCartBtn.click();
    };

}

const inventory = new Inventory();

export { inventory };