import { Then } from 'cypress-cucumber-preprocessor/steps';
import { getElement } from '../../utils/driver';

const pageName = 'DEPLOY_NEW_AGENT_PAGE';
const deployNewAgentSections = getSelector('deployNewAgentSections', pageName);

Then('A box with four steps to the different settings is displayed', () => {
    getElement(deployNewAgentSections).its('length').should('eq', 4)
});
