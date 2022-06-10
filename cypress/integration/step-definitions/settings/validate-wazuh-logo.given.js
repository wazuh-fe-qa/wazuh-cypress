import { Given } from 'cypress-cucumber-preprocessor/steps';
import { navigate, elementIsVisible } from '../../utils/driver';
import { wazuhMenuButton } from '../../pageobjects/wazuh-menu/wazuh-menu.page';

Given('The kibana admin user is logged in using {} and the wazuh logo is displayed',  () => {
    navigate("app/wazuh");
    elementIsVisible(wazuhMenuButton);
})

Given('The admin user is logged in using {}',  () => {
    navigate("app/wazuh");
    elementIsVisible(wazuhMenuButton);
})
