import { When } from 'cypress-cucumber-preprocessor/steps';
import { clickElement, elementIsVisible, getAttributeElement, getSelector } from '../../../utils/driver';

import { MODULES_SETTINGS } from '../../../utils/pages-constants';

When('The user {} the modules with {}', (status, moduleName) => {
    elementIsVisible(getSelector(moduleName, MODULES_SETTINGS));
    clickElement(getSelector(moduleName, MODULES_SETTINGS));
    cy.wait(1000)
});
