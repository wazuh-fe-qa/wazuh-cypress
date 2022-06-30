Feature: Should Displayes a warning modal

  As a kibana user
  i want to edit a custom rule
  in order to check if the warning no saving toast is displayed.

@rules
  Scenario: Validate confirmation when closing modal without saving - Management - edit groups
    Given The kibana admin user is logged and the wazuh logo is displayed
    When The user navigates to groups page
    And The user selects a group to edit
    #And The user modify the selected decoders
    #And The user tries to exit create decoders page without saving data
    #Then The informative modal is displayed
    