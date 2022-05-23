import { Then } from 'cypress-cucumber-preprocessor/steps';
import { getElement } from '../../utils/driver';
import { deployNewAgentSections } from '../../pageobjects/agents/deploy-new-agent.page';

Then('A box with four steps to the different settings is displayed', () => {
    getElement(deployNewAgentSections).its('length').should('eq', 4)
});
