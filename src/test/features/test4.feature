Feature: Verify Error Handling on JDoodle Online Java Compiler

  Scenario: Handling errors when running invalid Java code
    Given I navigate to the JDoodle Online Java Compiler website for test4
    And I enter the following invalid Java code in the editor:
      """
      Invalid Java Code
      """
    When I click on the "Run" button for test4
    Then an error message should be displayed