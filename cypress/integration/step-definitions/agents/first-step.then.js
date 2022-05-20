import { And } from 'cypress-cucumber-preprocessor/steps';
import { elementIsVisible, xpathElementIsVisible, checkInformationElement } from '../../utils/driver';
import { operationSystemTitle, operationSystemOption,closeButton } from '../../pageobjects/agents/deploy-new-agent.page';
And('A first step {string} is displayed and the following {string} options', (title, option) => {
    elementIsVisible(operationSystemTitle);
    elementIsVisible(operationSystemOption);
    checkInformationElement(operationSystemTitle, title, 1);
    checkInformationElement(operationSystemOption, option, 4);
});
And('An X button in the top right is displayed', () => {
    xpathElementIsVisible(closeButton);
});