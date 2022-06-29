import { Given } from 'cypress-cucumber-preprocessor/steps';
import { navigate, elementIsVisible, getSelector } from '../../utils/driver';

import { WAZUH_MENU_PAGE as pageName} from '../../utils/pages-constants';
const wazuhMenuButton = getSelector('wazuhMenuButton', pageName);

Given('The kibana admin user is logged and the wazuh logo is displayed',  () => {
    navigate("app/wazuh");
    elementIsVisible(wazuhMenuButton);
})

// Given('The admin user is logged in using {}',  () => {
//     navigate("app/wazuh");
//     elementIsVisible(wazuhMenuButton);
// })
