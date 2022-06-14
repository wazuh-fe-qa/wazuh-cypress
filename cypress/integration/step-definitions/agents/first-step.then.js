import { Then } from 'cypress-cucumber-preprocessor/steps';
import { elementIsVisible, xpathElementIsVisible, checkInformationElement, getSelector } from '../../utils/driver';

const operationSystemTitle = getSelector('operationSystemTitle','DEPLOY_NEW_AGENT_PAGE');
const operationSystemOption = getSelector('operationSystemOption','DEPLOY_NEW_AGENT_PAGE');
const closeButton = getSelector('closeButton','DEPLOY_NEW_AGENT_PAGE');

Then('A first step {string} is displayed and the following {string} options', (title, option) => {
    elementIsVisible(operationSystemTitle);
    elementIsVisible(operationSystemOption);
    checkInformationElement(operationSystemTitle, title, 1);
    checkInformationElement(operationSystemOption, option, 4);
});

Then('An X button in the top right is displayed', () => {
    xpathElementIsVisible(closeButton);
});
