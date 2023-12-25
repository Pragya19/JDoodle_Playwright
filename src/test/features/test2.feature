Feature: Compile and Run Java Code on JDoodle Online Java Compiler

  Scenario: Compiling and running a simple Java program
    Given I navigate to the JDoodle Online Java Compiler website for test2
    And I enter the following Java code in the editor:
      """
      public class HelloWorld {
          public static void main(String[] args) {
              System.out.println("Hello, World!");
          }
      }
      """
    When I click on the "Run" button for test2
    Then the output should contain "Hello, World!"