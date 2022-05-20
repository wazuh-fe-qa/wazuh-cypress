import { When } from 'cypress-cucumber-preprocessor/steps';
import { elementIsVisible,checkInformationElement } from '../../utils/driver';
import { serverAddressSubTitle, serverMessage, serverInputField } from '../../pageobjects/agents/deploy-new-agent.page';

When('A second step {string} with the {string} are displayed and the following {string} by default', (subtitleSecond, descriptionsSecond, secondInformation) => {
    elementIsVisible(serverAddressSubTitle);
    elementIsVisible(serverMessage);
    elementIsVisible(serverInputField);
    checkInformationElement(serverAddressSubTitle, subtitleSecond, 1);
    checkInformationElement(serverMessage, descriptionsSecond, 1);
    checkInformationElement(serverInputField, secondInformation, 1);
});