import { Then } from 'cypress-cucumber-preprocessor/steps';
import { elementIsVisible, checkInformationElement } from '../../utils/driver';
import { installAndEnrollAgentSubTitle, installAndEnrollAgentDefaultLabel } from '../../pageobjects/agents/deploy-new-agent.page';

Then('A fourth step {string} with the {string} by default is displayed', (title, message) => {
    elementIsVisible(installAndEnrollAgentSubTitle);
    elementIsVisible(installAndEnrollAgentDefaultLabel);
    checkInformationElement(installAndEnrollAgentSubTitle, title, 1);
    checkInformationElement(installAndEnrollAgentDefaultLabel, message, 1);
});
