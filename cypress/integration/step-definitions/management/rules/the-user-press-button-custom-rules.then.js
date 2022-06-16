import { Then } from 'cypress-cucumber-preprocessor/steps';
import { clickElement, elementIsVisible, getSelector } from '../../../utils/driver';

import { RULES_PAGE as pageName} from '../../../utils/pages-constants';
const customRulesButtonSelector = getSelector('customRulesButtonSelector', pageName);

Then('The user press button custom rules', () => {
  elementIsVisible(customRulesButtonSelector);
  clickElement(customRulesButtonSelector);
});
