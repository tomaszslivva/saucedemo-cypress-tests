import CheckOutCompletePage from './checkout_complete_page';

class CheckOutStepTwoPage {

    //Selectors

    finishButton(){
        return cy.get('[data-test="finish"]');
    }

    //Actions

    clickFinishButton(){
        this.finishButton().click();
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html');
        CheckOutCompletePage.orderCompleteHeader().contains('THANK YOU FOR YOUR ORDER').and('be.visible');

        return this;
    }

}

export default new CheckOutStepTwoPage();