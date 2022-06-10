import { Given } from 'cypress-cucumber-preprocessor/steps';
import { navigate, elementIsVisible } from '../../utils/driver';
import { wazuhMenuButton } from '../../pageobjects/wazuh-menu/wazuh-menu.page';
const url = Cypress.env(loginMethod);

Given('The kibana admin user is logged in using {} and the wazuh logo is displayed',  (loginMethod) => {
    // const url = Cypress.env(loginMethod);
    
    navigate(Cypress.env(loginMethod));
    
    elementIsVisible(wazuhMenuButton);
    
})

Given('The admin user is logged in using {}',  (loginMethod) => {
    // const url = Cypress.env(loginMethod);
    
    navigate(Cypress.env(loginMethod));
    
    elementIsVisible(wazuhMenuButton);
    
})
