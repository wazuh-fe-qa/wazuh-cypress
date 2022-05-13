import { And } from 'cypress-cucumber-preprocessor/steps';
import { elementIsVisible } from '../../utils/driver';
import { installAndEnrollAgentSubTitle, installAndEnrollAgentDefaultLabel } from '../../pageobjects/agents/deploy-new-agent.page';
And('A fourth step {string} with the {string} by default is displayed', (title, message) => {
    elementIsVisible(installAndEnrollAgentSubTitle);
    elementIsVisible(installAndEnrollAgentDefaultLabel);
    cy.checkInformationElement(installAndEnrollAgentSubTitle, title, 1);
    cy.checkInformationElement(installAndEnrollAgentDefaultLabel, message, 1);
});