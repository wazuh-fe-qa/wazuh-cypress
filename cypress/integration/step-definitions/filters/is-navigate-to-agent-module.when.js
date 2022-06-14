import { When } from 'cypress-cucumber-preprocessor/steps';
import { clickElement, elementIsVisible, xpathElementIsVisible, clickElementByXpath, getSelector} from '../../utils/driver';
import { AGENT_MODULES } from '../../utils/mappers/agent-modules-mapper'; 

import { AGENTS_PAGE as pageName} from '../../utils/pages-constants';
const moreLink = getSelector('moreLink', pageName);

When('is navigates to agentModule {}', (moduleName) => {
  xpathElementIsVisible(moreLink);
  clickElementByXpath(moreLink);
  elementIsVisible(AGENT_MODULES[moduleName]);
  clickElement(AGENT_MODULES[moduleName]);
  });
  