import { When } from 'cypress-cucumber-preprocessor/steps';
import { clickElement, elementIsVisible, getSelector } from '../../../utils/driver';

import { DECODERS_PAGE as pageName} from '../../../utils/pages-constants';
const customDecodersButtonSelector = getSelector('customDecodersButtonSelector', pageName);

When('The user press button custom decoders', () => {
  elementIsVisible(customDecodersButtonSelector);
  clickElement(customDecodersButtonSelector);
});
