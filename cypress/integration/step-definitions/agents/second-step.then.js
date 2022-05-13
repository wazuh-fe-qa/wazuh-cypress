import { And } from 'cypress-cucumber-preprocessor/steps';
import { elementIsVisible } from '../../utils/driver';
import { serverAddressSubTitle, serverMessage, serverInputField } from '../../pageobjects/agents/deploy-new-agent.page';
And('A second step {string} with the {string} are displayed and the following {string} by default', (subtitleSecond, descriptionsSecond, secondInformation) => {
    elementIsVisible(serverAddressSubTitle);
    elementIsVisible(serverMessage);
    elementIsVisible(serverInputField);
    cy.checkInformationElement(serverAddressSubTitle, subtitleSecond, 1);
    cy.checkInformationElement(serverMessage, descriptionsSecond, 1);
    cy.checkInformationElement(serverInputField, secondInformation, 1);
});