import { When } from 'cypress-cucumber-preprocessor/steps';
import { clickElement , elementIsVisible, getSelector} from '../../utils/driver';

import { WAZUH_MENU_PAGE as pageName} from '../../utils/pages-constants';
const settingsButton = getSelector('settingsButton', pageName);
const wazuhMenuButton = getSelector('wazuhMenuButton', pageName);

import { SETTINGS_MENU_LINKS } from '../../utils/mappers/settings-mapper';

When('The user navigates to {} settings', (menuOption) => {
  elementIsVisible(wazuhMenuButton);
  clickElement(wazuhMenuButton);
  elementIsVisible(settingsButton);
  clickElement(settingsButton);
  elementIsVisible(SETTINGS_MENU_LINKS[menuOption]);
  clickElement(SETTINGS_MENU_LINKS[menuOption]);
});
