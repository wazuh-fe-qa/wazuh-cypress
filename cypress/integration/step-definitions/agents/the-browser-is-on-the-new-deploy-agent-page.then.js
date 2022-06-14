import { Then } from 'cypress-cucumber-preprocessor/steps';
import { elementIsVisible } from '../../utils/driver';

const pageName = 'DEPLOY_NEW_AGENT_PAGE';
const deployNewAgentSections = getSelector('deployNewAgentSections', pageName);

Then('The browser is on the new deploy agent page', () => {
    elementIsVisible(deployNewAgentSections);
});