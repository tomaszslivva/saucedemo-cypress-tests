import InventoryPage from './inventory_page';
import CheckOutStepOnePage from './checkout_step_one_page';

class ShoppingCartPage {

    //Selectors

    checkOutButton(){
        return cy.get('[data-test="checkout"]');
    }

    //Actions
    checkIfItemIsInCart(item){
        cy.fixture('shop_equipment.json').then(items => {
            InventoryPage.inventoryItemName().contains(item).and('be.visible');
            InventoryPage.inventoryItemPrice().contains(items[item].price).and('be.visible');
        });

        return this;
    }

    clickCheckoutButton(){
        this.checkOutButton().click();
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html');
        CheckOutStepOnePage.firstNameField().should('be.visible');
        CheckOutStepOnePage.lastNameField().should('be.visible');
        CheckOutStepOnePage.postCodeField().should('be.visible');

        return this;
    }
}

export default new ShoppingCartPage();