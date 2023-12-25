Feature: New Project for Java Code on JDoodle Online Java Compiler

  Scenario: Starting new java project
    Given I navigate to the JDoodle Online Java Compiler website for test7
    When I click on new project button
    And I select yes in new project confirmation pop-up
    Then the blank editor should load
    And I enter a valid Java code in the editor:
      """
            public class HelloWorld {
                public static void main(String[] args) {
                    System.out.println("Hello, World!");
                }
            }
      """
    Then the editor should reflect the valid code
