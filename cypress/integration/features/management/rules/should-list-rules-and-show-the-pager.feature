Feature: Should List Rules And Show The Pager

  As a kibana user
  i want to see the Rules pages
  in order to manage them
  
  @rules
  Scenario: Should List Rules And Show The Pager
    Given The kibana admin user is logged in using xpack and the wazuh logo is displayed
    When The user navigates to rules
    Then The user should see the rules
  
  @rules
  Scenario: Should List Custom Rules And Show The Pager
    Given The kibana admin user is logged in using xpack and the wazuh logo is displayed
    When The user navigates to rules
    When The user clicks the custom rules button
    Then The user should see the rules
