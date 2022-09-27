
class LoginPage {
    
    //Selectors

    loginLogo(){
        return cy.get('.login_logo');
    }

    loginWrapper(){
        return cy.get('.login_wrapper-inner');
    }

    loginButtonContainer(){
        return cy.get('#login_button_container');
    }

    botContainer(){
        return cy.get('.bot_column');
    }

    usernameField(){
        return cy.get('[data-test="username"]');
    }

    passwordField(){
        return cy.get('[data-test="password"]');
    }

    loginButton(){
        return cy.get('[data-test="login-button"]');
    }

    errorMessage(){
        return cy.get('[data-test="error"]');
    }

    loginCredentials(){
        return cy.get('#login_credentials');
    }

    loginPassword(){
        return cy.get('.login_password');
    }

    //Actions

    visitLoginPage(){
        return cy.visit('https://www.saucedemo.com');
    }

    loginAsUser(user){
        cy.fixture('users.json').then(users => {
            const password = users.password;
            this.usernameField().clear().type(user).should('have.value', user);
            this.passwordField().clear().type(password).should('have.value', password);
            this.loginButton().should('be.enabled').click();
        });

        return this;
    }

    loginPageFullyLoaded(){
        this.loginLogo().should('be.visible');
        this.loginWrapper().should('be.visible');
        this.loginButtonContainer().should('be.visible');
        this.botContainer().should('be.visible');
        this.usernameField().should('be.visible');
        this.passwordField().should('be.visible');
        this.loginButton().should('be.visible');
        this.loginCredentials().should('be.visible');
        this.loginPassword().should('be.visible');

        return this;
    }
    
}

export default new LoginPage();