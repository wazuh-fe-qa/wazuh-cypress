// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:

import { LOGIN_TYPE, OVERVIEW_URL } from '../integration/utils/login-constants';
import {
    updateCookies,
    clearSession,
    updateExpiryValueCookies,
    navigate,
    validateURLIncludes,
    setCookies,
    preserveCookie,
    timestampToDate
} from '../integration/utils/driver';
import { COOKIE_TYPE } from './cookie-constants';
const loginMethod = Cypress.env('type')
import './commands';
require("cypress-xpath");

before(() => {
    clearSession();

    cy.setSessionStorage('healthCheck', 'executed');

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    const login = LOGIN_TYPE[loginMethod];

    cy.log(`Parameter loginMethod is: ${loginMethod} and url from loginMethod is: ${Cypress.config('baseUrl')}`);

    navigate("app/wazuh");

    login ? login() : cy.log(`Error! loginMethod: "${loginMethod}" is not recognized`);

    cy.wait(15000);

    validateURLIncludes(OVERVIEW_URL);

    cy.getCookies().then((cookies) => {
        cy.log(`cookies eb before: ${JSON.stringify(cookies)}`);
        cy.writeFile('cookies.json', JSON.stringify(cookies));
    })
})

beforeEach(() => {
    cy.readFile('cookies.json').then((obj) => {
        obj.forEach((element) => {
        cy.setCookie(element.name, element.value);
      });
    })
    cy.setSessionStorage('healthCheck', 'executed');
})
