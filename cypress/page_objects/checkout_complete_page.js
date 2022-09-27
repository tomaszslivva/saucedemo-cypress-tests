class CheckoutCompletePage {

    //Selectors

    orderCompleteHeader(){
        return cy.get('.complete-header');
    }

}

export default new CheckoutCompletePage();