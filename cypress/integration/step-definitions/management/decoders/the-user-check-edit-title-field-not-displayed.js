import { Then } from 'cypress-cucumber-preprocessor/steps';
import { getSelector, elementIsNotVisible } from '../../../utils/driver';
import { DECODERS_PAGE as pageName} from '../../../utils/pages-constants';
const decoderTitleSelector = getSelector('decoderTitleSelector', pageName);


Then('The user checks the tittle its not editable', () => {
  elementIsNotVisible(decoderTitleSelector);
});
