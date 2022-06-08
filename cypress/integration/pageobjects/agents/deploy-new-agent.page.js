export const closeButton = "//span[contains(text(),'Close')]";
export const title = "[name='RegisterAgent'] h2";
export const deployNewAgentSections = "[name='RegisterAgent'] .euiStep";

export const operatingSystemSubTitle = "[name='RegisterAgent'] .euiStep:nth-child(1) p";
export const redhatButton = '[data-text="Red Hat / CentOS"]'
export const debianUbuntuButton = '[data-text="Debian / Ubuntu"]';
export const windowsButton = '[data-text="Windows"]';
export const macOSButton = '[data-text="MacOS"]';

export const operationSystemTitle = "[name='RegisterAgent'] .euiStep:nth-child(1) .euiTitle";
export const operationSystemOption = "[name='RegisterAgent'] .euiStep:nth-child(1) fieldset label";

export const serverAddressSubTitle = "[name='RegisterAgent'] .euiStep:nth-child(2) :nth-child(1) p.euiStep__title";
export const serverMessage = "[name='RegisterAgent'] .euiStep:nth-child(2) .euiStep__content p";
export const serverInputField = "[name='RegisterAgent'] .euiStep:nth-child(2) [placeholder='Server address']";

export const agentToGroupSubTitle = "[name='RegisterAgent'] .euiStep:nth-child(3) .euiTitle";
export const agentToGroupMessage = "//*[@name='RegisterAgent']//*[3][contains(@class,'euiStep')]//*[contains(@class,'euiText')]/p";//cambiar a xpath
export const agentToGroupSelector = "[name='RegisterAgent'] .euiStep:nth-child(3) [data-test-subj='comboBoxInput']";

export const installAndEnrollAgentSubTitle = "[name='RegisterAgent'] .euiStep:nth-child(4) .euiTitle";
export const installAndEnrollAgentDefaultLabel = "[name='RegisterAgent'] .euiStep:nth-child(4) .euiCallOutHeader__title";
// after selected these OS options
export const installAndEnrollAgentCommand = "[name='RegisterAgent'] .euiStep:nth-child(5) .euiCodeBlock__line";
export const installAndEnrollAgentCopyButton = "[name='RegisterAgent'] .euiStep:nth-child(5) .copy-codeblock-wrapper .copy-overlay";

export const startTheAgentTitle= "[name='RegisterAgent'] .euiStep:nth-child(6) p";
export const startTheAgentTabsLabels = "[name='RegisterAgent'] .euiStep:nth-child(6) .euiStep__content .euiTabs button";
export const systemmdTabButton = "[name='RegisterAgent'] .euiStep:nth-child(6) .euiStep__content .euiTabs button:nth-child(1)";
export const sysVTabButton = "[name='RegisterAgent'] .euiStep:nth-child(6) .euiStep__content .euiTabs button:nth-child(2)";
export const startTheAgentCommandText = "[name='RegisterAgent'] .euiStep:nth-child(6) .euiStep__content [role='tabpanel'] .euiText pre" ;
export const startTheAgentcopyButton = "[name='RegisterAgent'] .euiStep:nth-child(6) .euiStep__content [role='tabpanel'] .euiText .copy-overlay";
