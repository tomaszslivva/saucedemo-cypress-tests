class CheckOutStepOnePage {

    //Selectors

    firstNameField(){
        return cy.get('[data-test="firstName"]');
    }

    lastNameField(){
        return cy.get('[data-test="lastName"]');
    }

    postCodeField(){
        return cy.get('[data-test="postalCode"]');
    }

    continueButton(){
        return cy.get('[data-test="continue"]');
    }

    //Actions

    fillCheckOutFormWith(firstName, lastName, postCode) {
        this.firstNameField().clear().type(firstName).should('have.value', firstName);
        this.lastNameField().clear().type(lastName).should('have.value', lastName);
        this.postCodeField().clear().type(postCode).should('have.value', postCode);

        return this;
    }

    clickContinueButton(){
        this.continueButton().click();
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-two.html');

        return this;
    }

}

export default new CheckOutStepOnePage();