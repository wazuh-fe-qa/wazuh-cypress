import { Then } from 'cypress-cucumber-preprocessor/steps';
import { getSelector, elementIsVisible } from '../../../utils/driver';
import { DECODERS_PAGE as pageName} from '../../../utils/pages-constants';
const testButtonSelector = getSelector('testButtonSelector', pageName);


Then('The user checks the test button its displayed', () => {
  elementIsVisible(testButtonSelector);
});
