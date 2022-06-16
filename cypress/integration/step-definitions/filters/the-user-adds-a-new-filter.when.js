import { When } from 'cypress-cucumber-preprocessor/steps';
import { clickElement, fillField, elementIsVisible, getAvailableElement, getSelector} from '../../utils/driver';

import { FILTERS_PAGE as pageName} from '../../utils/pages-constants';
const addFilterButton = getSelector('addFilterButton', pageName);
const filterSuggestionList = getSelector('filterSuggestionList', pageName);
const filterOperatorList = getSelector('filterOperatorList', pageName);
const filterParams = getSelector('filterParams', pageName);
const saveFilterButton = getSelector('saveFilterButton', pageName);
const selectedOperator = getSelector('selectedOperator', pageName);
const selectedFilter = getSelector('selectedFilter',pageName);

When('The user adds a new filter', () => {
  elementIsVisible(addFilterButton);
  clickElement(addFilterButton);
  fillField(filterSuggestionList,'rule.level');
  elementIsVisible(selectedFilter);
  clickElement(selectedFilter);
  getAvailableElement(filterOperatorList);
  elementIsVisible(filterOperatorList);
  clickElement(filterOperatorList);
  elementIsVisible(selectedOperator);
  clickElement(selectedOperator);
  fillField(filterParams,'7');
  clickElement(saveFilterButton);
});
