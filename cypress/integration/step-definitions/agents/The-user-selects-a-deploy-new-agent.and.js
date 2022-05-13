import { And } from 'cypress-cucumber-preprocessor/steps';
import { clickElementByXpath, xpathElementIsVisible } from '../../utils/driver';
import { deployNewAgentButton } from '../../pageobjects/agents/agents.page';
And('The user selects a deploy new agent', () => {
    xpathElementIsVisible(deployNewAgentButton);
    clickElementByXpath(deployNewAgentButton);
});
