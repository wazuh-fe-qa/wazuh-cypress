import { clickElement, getSelector } from '../../../utils/driver';
import { SAMPLE_DATA } from '../../../utils/pages-constants';



When('The user {} sample data for', (status,types) => {
  cy.get('[data-test-subj="globalToastList"] div button', { timeout: 8000 });
  clickElement('[data-test-subj="globalToastList"] div button');
  types.raw().forEach((sample) => {
    cy.wait(500)
    clickElement(getSelector(sample, SAMPLE_DATA));
    debugger
    cy.wait(2000);
    cy.get('[data-test-subj="globalToastList"] div span', { timeout: 8000 })
      .then(($) => {
        const texts = $.map((i, el) => Cypress.$(el).text().replace('A new notification appears').replace('Date range for sample data is now-7 days ago'))
        const paragraphs = texts.get()
        let element = getSelector(sample + ' title', SAMPLE_DATA)
        let titles = Cypress.$(element).text()
        let titleStatus = 'added'
        if(status != 'adds') titleStatus =  'removed';
        expect(paragraphs.toString()).to.equals(titles + ' alerts '+ titleStatus)
        clickElement('[data-test-subj="globalToastList"] div button');
      })
  });
});
