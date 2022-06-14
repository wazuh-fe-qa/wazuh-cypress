import { When } from 'cypress-cucumber-preprocessor/steps';
import { clickElementByXpath, xpathElementIsVisible } from '../../utils/driver';

const pageName = 'AGENTS_PAGE';
const deployNewAgentButton = getSelector('deployNewAgentSections', pageName);

When('The user selects a deploy new agent', () => {
    xpathElementIsVisible(deployNewAgentButton);
    clickElementByXpath(deployNewAgentButton);
});
