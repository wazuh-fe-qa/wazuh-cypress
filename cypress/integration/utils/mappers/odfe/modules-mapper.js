import {
  MODULES_PAGE
} from '../../../pageobjects/odfe/settings/modules.page';
import {
  MODULES_DIRECTORY_PAGE
} from '../../../pageobjects/odfe/modules-directory.page';

export const MODULES_CARDS = {
  'Amazon AWS': MODULES_PAGE['amazonAWSCard'],
  'Google Cloud Platform': MODULES_PAGE['gCPCard'],
  GitHub: MODULES_PAGE['gitHubCard'],
  OpenSCAP: MODULES_PAGE['openSCAPCard'],
  'CIS-CAT': MODULES_PAGE['cisCatCard'],
  VirusTotal: MODULES_PAGE['virusTotalCard'],
  Osquery: MODULES_PAGE['osqueryCard'],
  'Docker listener': MODULES_PAGE['dockerListenerCard'],
  GDPR: MODULES_PAGE['gDPRCard'],
  HIPAA: MODULES_PAGE['hIPAACard'],
  TSC: MODULES_PAGE['tSCCard'],
};

export const MODULES_SETTINGS = {
  'Amazon AWS': MODULES_DIRECTORY_PAGE['amazonAWSToggleButton'],
  'Google Cloud Platform': MODULES_DIRECTORY_PAGE['gCPToggleButton'],
  GitHub: MODULES_DIRECTORY_PAGE['gitHubCardToggleButton'],
  OpenSCAP: MODULES_DIRECTORY_PAGE['openSCAPToggleButton'],
  'CIS-CAT': MODULES_DIRECTORY_PAGE['cisCatToggleButton'],
  VirusTotal: MODULES_DIRECTORY_PAGE['virusTotalToggleButton'],
  Osquery: MODULES_DIRECTORY_PAGE['osqueryToggleButton'],
  'Docker listener': MODULES_DIRECTORY_PAGE['dockerListenerToggleButton'],
  GDPR: MODULES_DIRECTORY_PAGE['gDPRToggleButton'],
  HIPAA: MODULES_DIRECTORY_PAGE['hIPAAToggleButton'],
  TSC: MODULES_DIRECTORY_PAGE['tSCToggleButton'],
};
