
class InventoryPage {

    //Selectors

    title(){
        return cy.get('.title');
    }

    menuButton(){
        return cy.get('#react-burger-menu-btn');
    }

    logoutButton(){
        return cy.get('#logout_sidebar_link');
    }

    inventoryList(){
        return cy.get('.inventory_list');
    }

    inventoryItemName(){
        return cy.get('.inventory_item_name');
    }

    inventoryItemPrice(){
        return cy.get('.inventory_item_price');
    }

    shoppingCartLink(){
        return cy.get('.shopping_cart_link');
    }

    shoppingCartItemNumberBadge(){
        return cy.get('.shopping_cart_badge');
    }

    //Actions

    userIsLoggedIn(user){
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
        cy.getCookie('session-username').should('have.property', 'value', user);
        this.title().should('be.visible').and('contain', 'Products');
        this.inventoryList().should('be.visible');

        return this;
    }

    checkShoppingCartItemNumber(){

        this.inventoryItemName().then( (product) => {
            this.shoppingCartItemNumberBadge().contains(product.length);
        });

        return this;
    }

    addItemToCard(item_name){

        this.inventoryList().find(`:contains(${item_name})`).within(element => {
            element.find('[data-test*="add-to-cart-"]').click();
        });

        this.inventoryList().find(`:contains(${item_name})`).wrap(element => {
            element.find('[data-test*="remove-"]').should('be.visible').and('contain', 'Remove');
        });

        this.shoppingCartItemNumberBadge().should('be.visible');

        return this;
    }

    clickOnShoppingCart(){
        this.shoppingCartLink().click();
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html');
        this.checkShoppingCartItemNumber();
        
        return this;
    }

    logoutUser(){
        this.menuButton().click();
        this.logoutButton().click();
        cy.url().should('eq', 'https://www.saucedemo.com/');

        return this;
    }

}

export default new InventoryPage();