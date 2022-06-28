import { When } from 'cypress-cucumber-preprocessor/steps';
import { clickElement, elementIsVisible, getSelector } from '../../../utils/driver';

import { RULES_PAGE as pageName} from '../../../utils/pages-constants';
const confirmModalSelector = getSelector('confirmModalSelector', pageName);

When('The informative modal is displayed', () => {
  elementIsVisible(confirmModalSelector);
  clickElement(confirmModalSelector);
});
