class checkout {
    get firstNameInput() {
        return $("#first-name");
    };

    get lastNameInput() {
        return $("#last-name");
    };

    get postalCodeInput() {
        return $("#postal-code");
    };

    get cancelBtn() {
        return $("#cancel");
    };

    get continueBtn() {
        return $("#continue");
    };

    get finishBtn() {
        return $("#finish");
    };

    get backHomeBtn() {
        return $("#back-to-products");
    };

    async firstNameInputFill() {
        await this.firstNameInput.setValue("Micaela");
    };

    async lastNameInputFill() {
        await this.lastNameInput.setValue("Rossi");
    };

    async postalCodeInputFill() {
        await this.postalCodeInput.setValue("2000");
    };

    async cancelBtnClick() {
        await this.cancelBtn.click();
    };

    async continueBtnClick() {
        await this.continueBtn.click();
    };

    async finishBtnClick() {
        await this.finishBtn.click();
    };

    async backHomeBtnClick() {
        await this.backHomeBtn.click();
    };
}

export default new checkout();