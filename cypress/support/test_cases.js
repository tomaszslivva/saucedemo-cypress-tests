import LoginPage from '../page_objects/login_page';
import InventoryPage from '../page_objects/inventory_page';
import ShoppingCartPage from '../page_objects/shopping_cart_page';
import CheckOutStepOnePage from '../page_objects/checkout_step_one_page';
import CheckOutStepTwoPage from '../page_objects/checkout_step_two_page';
import users from '../fixtures/users.json';

export function TC01() {
  it('TC01: Login form validation', () => {
    LoginPage.loginButton().click();
    LoginPage.errorMessage().should('be.visible').and('contain', 'Username is required');
  });
}

export function TC02() {
  it('TC02: Success Login', () => {
    LoginPage.loginAsUser(users.usernames[0]);
    InventoryPage.userIsLoggedIn(users.usernames[0]);
    InventoryPage.logoutUser();
    LoginPage.usernameField().should('be.enabled').clear().type(users.usernames[1]);
    LoginPage.passwordField().clear().type(users.password);
    LoginPage.loginButton().should('be.enabled').click();
    LoginPage.errorMessage().should('be.visible').and('contain', 'Sorry, this user has been locked out.');
    LoginPage.loginAsUser(users.usernames[2]);
    InventoryPage.userIsLoggedIn(users.usernames[2]);
    InventoryPage.logoutUser();
    LoginPage.loginAsUser(users.usernames[3]);
    InventoryPage.userIsLoggedIn(users.usernames[3]);
    InventoryPage.logoutUser();
  });
}

export function TC03() {
  it('TC03: Success Order', () => {
    LoginPage.loginAsUser(users.usernames[0]);
    InventoryPage.userIsLoggedIn(users.usernames[0]);
    InventoryPage.addItemToCard('Sauce Labs Backpack');
    InventoryPage.clickOnShoppingCart();
    ShoppingCartPage.checkIfItemIsInCart('Sauce Labs Backpack');
    ShoppingCartPage.clickCheckoutButton();
    CheckOutStepOnePage.fillCheckOutFormWith('first', 'last', '0000');
    CheckOutStepOnePage.clickContinueButton();
    CheckOutStepTwoPage.clickFinishButton();
  });
}
