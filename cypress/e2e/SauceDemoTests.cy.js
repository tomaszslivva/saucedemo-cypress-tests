import { TC01, TC02, TC03, beforeEachTest } from "../support/test_cases";
import LoginPage from '../page_objects/login_page';

describe('Sauce Demo Tests', () => {

    beforeEach(() => {
        LoginPage.visitLoginPage();
        LoginPage.loginPageFullyLoaded();
    });

    TC01();
    TC02();
    TC03();

});

describe('576 x 960 resolution', () => {

    beforeEach(() => {
        LoginPage.visitLoginPage();
        cy.viewport(576, 960);
        LoginPage.loginPageFullyLoaded();
    });

    TC01();
    TC02();
    TC03();
});

describe('820 x 1180 resolution', () => {

    beforeEach(() => {
        LoginPage.visitLoginPage();
        cy.viewport(820, 1180);
        LoginPage.loginPageFullyLoaded();
    });

    TC01();
    TC02();
    TC03();

});

describe('1920 x 1080 resolution', () => {

    beforeEach(() => {
        LoginPage.visitLoginPage();
        cy.viewport(1920, 1080);
        LoginPage.loginPageFullyLoaded();
    });

    TC01();
    TC02();
    TC03();

});

describe('Cat fact API check', () => {

    it('Cat fact API request should return 200', () => {
        cy.request('https://catfact.ninja/fact').then( response => {
            const status = response.status;
            const body = response.body;
            console.log(body);
            expect(status).to.eq(200);
            expect(Object.keys(body)).contains('fact');
            expect(Object.keys(body)).contains('length');
            expect(body.fact).to.not.be.empty;
            expect(body.fact).to.be.a('string');
            expect(body.length).to.not.be.null;
            expect(body.length).to.be.a('number');
            cy.log(body.fact);
            cy.log(body.length);
        });
    });
});