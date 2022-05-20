import { And } from 'cypress-cucumber-preprocessor/steps';
import { elementIsVisible,xpathElementIsVisible, xpathCheckInformationElement, checkInformationElement } from '../../utils/driver';
import { agentToGroupSubTitle, agentToGroupMessage, agentToGroupSelector } from '../../pageobjects/agents/deploy-new-agent.page';

And('A third step {string} with the {string} are displayed and the following drop-down with Select group by default {string}', (title, discription, information) => {
    elementIsVisible(agentToGroupSubTitle);
    xpathElementIsVisible(agentToGroupMessage);
    elementIsVisible(agentToGroupSelector);
    checkInformationElement(agentToGroupSubTitle, title, 1);
    xpathCheckInformationElement(agentToGroupMessage, discription, 1);
    checkInformationElement(agentToGroupSelector, information, 1);
});