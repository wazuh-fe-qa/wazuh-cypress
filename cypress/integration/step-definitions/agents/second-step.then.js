import { When } from 'cypress-cucumber-preprocessor/steps';
import { elementIsVisible,checkInformationElement } from '../../utils/driver';

const pageName = 'DEPLOY_NEW_AGENT_PAGE';
const serverAddressSubTitle = getSelector('serverAddressSubTitle', pageName);
const serverMessage = getSelector('serverMessage', pageName);
const serverInputField = getSelector('serverInputField', pageName);

When('A second step {string} with the {string} are displayed and the following {string} by default', (subtitleSecond, descriptionsSecond, secondInformation) => {
    elementIsVisible(serverAddressSubTitle);
    elementIsVisible(serverMessage);
    elementIsVisible(serverInputField);
    checkInformationElement(serverAddressSubTitle, subtitleSecond, 1);
    checkInformationElement(serverMessage, descriptionsSecond, 1);
    checkInformationElement(serverInputField, secondInformation, 1);
});