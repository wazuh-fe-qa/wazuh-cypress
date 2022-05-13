import { And } from 'cypress-cucumber-preprocessor/steps';
import { elementIsVisible,xpathElementIsVisible } from '../../utils/driver';
import { agentToGroupSubTitle, agentToGroupMessage, agentToGroupSelector } from '../../pageobjects/agents/deploy-new-agent.page';
And('A third step {string} with the {string} are displayed and the following drop-down with Select group by default {string}', (title, discription, information) => {
    elementIsVisible(agentToGroupSubTitle);
    xpathElementIsVisible(agentToGroupMessage);
    elementIsVisible(agentToGroupSelector);
    cy.checkInformationElement(agentToGroupSubTitle, title, 1);
    cy.xpathCheckInformationElement(agentToGroupMessage, discription, 1);
    cy.checkInformationElement(agentToGroupSelector, information, 1);
});