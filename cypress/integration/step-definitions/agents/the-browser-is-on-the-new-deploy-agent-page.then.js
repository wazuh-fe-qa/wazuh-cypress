import { Then } from 'cypress-cucumber-preprocessor/steps';
import { elementIsVisible } from '../../utils/driver';
import { deployNewAgentSections } from '../../pageobjects/agents/deploy-new-agent.page';

Then('The browser is on the new deploy agent page', () => {
    elementIsVisible(deployNewAgentSections);
});