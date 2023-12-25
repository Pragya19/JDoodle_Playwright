Feature: Verify Sample Code Links on JDoodle Online Java Compiler

  Scenario: Clicking on sample code links
    Given I navigate to the JDoodle Online Java Compiler website for test5
    When I click on various sample code links
    Then the corresponding code should be populated in the editor