Feature: Check Full Screen Mode on JDoodle Online Java Compiler

Background:  
Given I navigate to the JDoodle Online Java Compiler website for test6

  Scenario: Enter Full Screen Mode
    When I click on the full-screen button
    Then the editor should expand to full screen

  Scenario: Exit Full Screen Mode
    And I click on the full-screen button
    When I click on the exit full-screen button
    Then the editor should return to normal size