export const AGENTS_PAGE = {
  firstAgentList: '[data-test-subj="row-001"]',
  agSecurityEventsLink: '.WzManagementSideMenu [title="Security events"] div div',
  agIntegrityMonitoringLink: '.WzManagementSideMenu [title="Integrity monitoring"] div div',
  agSCALink: '.euiFlexItem.wz-module-header-agent-title > div > div:nth-child(4) button',
  agSystemAuditingLink: '.WzManagementSideMenu [title="System Auditing"] div div',
  agVulnerabilitiesLink: '.WzManagementSideMenu [title="Vulnerabilities"] div div',
  agMitreAttackLink: '.WzManagementSideMenu [title="MITRE ATT&CK"] div div',
  moreLink:
    '//*[contains(@class,"wz-module-header-agent-main")]//*/button//*/span[contains(text(),"More")]',
  agPolicyMonitoring: '.WzManagementSideMenu [title="Policy Monitoring"] div div',
  agPCIDSS: '.WzManagementSideMenu [title="PCI DSS"] div div',
  agGDPR: '.WzManagementSideMenu [title="GDPR"] div div',
  agHIPAA: '.WzManagementSideMenu [title="HIPAA"] div div',
  agNIST: '.WzManagementSideMenu [title="NIST 800-53"] div div',
  agTSC: '.WzManagementSideMenu [title="TSC"] div div',
  statusChart:
    '.agents-status-pie > .euiPanel > .euiCard__content > .euiCard__children > .euiFlexGroup',
  agentDetails: 'euiFlexItem euiFlexItem--flexGrowZero agents-details-card',
  deployNewAgentButton: '//span[contains(text(),"Deploy new agent")]',
};
