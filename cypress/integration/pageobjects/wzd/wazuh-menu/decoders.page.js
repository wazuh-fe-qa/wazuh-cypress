export const DECODERS_PAGE = {
  tableSelector: '[class="euiTableRow customRowClass euiTableRow-isClickable"]',
  dropdownPaginationSelector: '[data-test-subj="tablePaginationPopoverButton"]',
  listPages: 'nav[class="euiPagination"]',
  customDecodersButtonSelector: '[data-test-subj="Custom decoders"]',
  manageDecodersFilesButtonSelector: '.euiFlexGroup .euiFlexItem .euiButtonEmpty .euiButtonContent .euiButtonEmpty__text:contains("Manage decoders files")',
  editDecoderButtonSelector: '.euiTable tbody .euiTableRowCell .euiTableCellContent .euiToolTipAnchor .euiButtonIcon[aria-label="Edit content"]',
  saveDecoderButtonSelector: '.euiFlexGroup .euiFlexItem button.euiButton span.euiButtonContent span.euiButton__text:contains("Save")',
  messageConfirmSaveSelector: '.euiText > span',
  buttonRestartSelector: '.euiCallOut.euiCallOut--primary .euiButton.euiButton--primary',
  firstCustomDecoder: '[data-test-subj="row-local_decoder_example"]',
  xmlDecoderFile:':nth-child(4) .euiTableCellContent .euiToolTipAnchor .euiLink',
  codeEditorSelector: '.euiFlexItem [data-test-subj="codeEditorContainer"]',
  backButtonSelector: '.euiFlexGroup .euiFlexItem .euiToolTipAnchor .euiButtonIcon',
  confirmModalSelector: '[data-test-subj="confirmModalTitleText"]',
  createNewDecoderSelector:'.euiFlexGroup .euiFlexItem .euiButtonEmpty .euiButtonContent .euiButtonEmpty__text:contains("Add new decoders file")',
  decoderTitleSelector: '.euiFlexItem .euiFlexGroup .euiFormControlLayout input.euiFieldText',
  saveDecoderMessage: '.euiText span:contains("Changes will not take effect until a restart is performed.")',
  lastPageButtonSelector: '.euiFlexItem .euiButtonEmpty[data-test-subj="pagination-button-7"] .euiButtonContent .euiButtonEmpty__text:contains("8")',
  localDecoderSelector: '.euiTable tbody .euiTableRowCell .euiTableCellContent:contains("local_decoder.xml") ',
  testButtonSelector: '.euiFlexItem .euiButtonEmpty .euiButtonContent .euiButtonEmpty__text:contains("Decoders Test")'

};
