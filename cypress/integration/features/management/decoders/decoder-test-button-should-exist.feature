Feature: Edit decoders & Validate Test button

  As a wazuh user
  i want to edit a custom decoder
  in order to check if the test button it's displayed
@decoders
  Scenario: Validate decoder editor for an existing file and the test button is existing
    Given The wazuh admin user is logged
    When The user navigates to decoders
    And The user clicks a existing decoder and edit it
    Then The user checks the tittle its not editable
    And The user checks the test button its displayed
    