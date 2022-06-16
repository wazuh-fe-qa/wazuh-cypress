import { clickElement, getSelector } from '../../../utils/driver';
import { SAMPLE_DATA } from '../../../utils/pages-constants';
When('The user adds/removes sample data for', (types) => {
  types.raw().forEach((sample) => {
    clickElement(getSelector(sample, SAMPLE_DATA));
    cy.wait(8000);
  });
});
