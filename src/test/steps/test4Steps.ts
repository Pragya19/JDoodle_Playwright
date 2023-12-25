import { Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from "../../hooks/pageFixture";
import assert from 'assert';


  Given('I navigate to the JDoodle Online Java Compiler website for test4', async function () {
    await pageFixture.page.goto('https://www.jdoodle.com/online-java-compiler');
  });

When('I enter the following invalid Java code in the editor:', async function (invalidCode: string) {
  await pageFixture.page.locator('#code').type(invalidCode);
});

When('I click on the "Run" button for test4', async function () {
  await pageFixture.page.click("//button[text()=' Execute ']");
});

Then('an error message should be displayed', async function () {
  const errorMessageSelector = "(//div[@class='ace_line'])[2]";
  await pageFixture.page.waitForSelector(errorMessageSelector);
  const errorMessageVisible = await pageFixture.page.isVisible(errorMessageSelector);
  assert.ok(errorMessageVisible, 'Expected error message to be visible, but it is not.');
});