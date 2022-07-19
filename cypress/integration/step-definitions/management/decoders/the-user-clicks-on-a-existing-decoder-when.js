import { When } from 'cypress-cucumber-preprocessor/steps';
import { clickElement, elementIsVisible, getSelector, forceClickElement } from '../../../utils/driver';
import { DECODERS_PAGE as pageName} from '../../../utils/pages-constants';
const manageDecodersFilesButtonSelector = getSelector('manageDecodersFilesButtonSelector', pageName);
const localDecoderSelector = getSelector('localDecoderSelector', pageName);
const editDecoderButtonSelector = getSelector('editDecoderButtonSelector', pageName);
const lastPageButtonSelector = getSelector('lastPageButtonSelector', pageName);

When('The user clicks a existing decoder and edit it', () => {
  if (Cypress.env('type') == 'wzd') {
    navigate("/");
    cy.get('nav #selectAPIBar').select('1513629884013');
}
  cy.wait(1000);
  elementIsVisible(manageDecodersFilesButtonSelector);
  clickElement(manageDecodersFilesButtonSelector);
  elementIsVisible(lastPageButtonSelector);
  forceClickElement(lastPageButtonSelector);
  elementIsVisible(localDecoderSelector);
  clickElement(localDecoderSelector);
  elementIsVisible(editDecoderButtonSelector);
  clickElement(editDecoderButtonSelector);
});
