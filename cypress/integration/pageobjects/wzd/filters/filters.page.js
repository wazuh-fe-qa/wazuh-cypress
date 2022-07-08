export const FILTERS_PAGE = {
  addFilterButton: '[data-test-subj="addFilter"]',
  filterSuggestionList: '[data-test-subj="filterFieldSuggestionList"]',
  filterOperatorList: '[data-test-subj="filterOperatorList"] div div [data-test-subj="comboBoxToggleListButton"]',
  filterParams: '[data-test-subj="filterParams"] .euiFieldNumber',
  saveFilterButton: '[data-test-subj="saveFilter"]',
  stablishedFilter: '[data-test-subj="filter filter-enabled filter-key-rule.level filter-value-7 filter-unpinned "]',
  pinFilterAction: '[data-test-subj="pinFilter"]',
  selectedOperator: 'button.euiFilterSelectItem[title="is"]',
  pinnedFilter: '[data-test-subj="filter filter-enabled filter-key-rule.level filter-value-7 filter-pinned "]',
  eventsButton: '//*[contains(@class,"euiTabs")]//*[contains(text(),"Events")]',
  removeFilterButton: '//*[contains(@class,"euiContextMenuPanel")]//*[contains(text(),"Delete")]',
  selectedOperatorLabel: '[data-test-subj="filterOperatorList"] div div [data-test-subj="comboBoxInput"] .euiComboBoxPill'
};
