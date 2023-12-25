import { Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from "../../hooks/pageFixture";
import assert from 'assert';


Given('I navigate to the JDoodle Online Java Compiler website for test2', async function () {
  await pageFixture.page.goto('https://www.jdoodle.com/online-java-compiler');
});

When('I enter the following Java code in the editor:', async function (javaCode: string) {
  await pageFixture.page.waitForLoadState();
  await pageFixture.page.waitForTimeout(4000);
  await pageFixture.page.locator('#code').type(javaCode);
});

When('I click on the "Run" button for test2', async function () {
  await pageFixture.page.click("//button[text()=' Execute ']");
  await pageFixture.page.waitForLoadState();
  await pageFixture.page.waitForTimeout(5000);
});

Then('the output should contain {string}', async function (expectedOutput: string) {
  const outputSelector = '#output';
  await pageFixture.page.waitForSelector(outputSelector);
  const outputText = await this.page.textContent(outputSelector);
  assert.ok(outputText.includes(expectedOutput), `Expected output to contain "${expectedOutput}", but found "${outputText}"`);
});