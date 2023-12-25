import { Given, Then } from '@cucumber/cucumber';
import { pageFixture } from "../../hooks/pageFixture";
import assert from 'assert';


  Given('I navigate to the JDoodle Online Java Compiler website for test1', async function () {
    await pageFixture.page.goto('https://www.jdoodle.com/online-java-compiler');
  });

Then('the page title should be {string}', async function (expectedTitle: string) {
  const actualTitle = await pageFixture.page.title();
  console.log('Actual Title:', actualTitle);
  assert.strictEqual(actualTitle, expectedTitle, `Expected title to be "${expectedTitle}", but found "${actualTitle}"`);

});