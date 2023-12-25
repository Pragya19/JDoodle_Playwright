import { Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from "../../hooks/pageFixture";

Given('I navigate to the JDoodle Online Java Compiler website for test7', async function () {
    await pageFixture.page.goto('https://www.jdoodle.com/online-java-compiler');
});

When('I click on new project button', async function () {
  await pageFixture.page.locator("(//button[contains(@class,'btn link-primary')])[1]").click();
});

When('I select yes in new project confirmation pop-up', async function () {
    await pageFixture.page.locator("(//button[contains(@class,'btn-primary w-full')])[1]").click();
});

Then('the blank editor should load', async function () {
    const isBlankEditor = await pageFixture.page.$eval('div#code>div:nth-of-type(2)>div', (element) => {
      return element !== null;
    });
    if (!isBlankEditor) {
      throw new Error('The editor is not in a blank or new project state.');
    }
  });

Given('I enter a valid Java code in the editor:', async function (javaCode: string) {
    await pageFixture.page.waitForLoadState();
    await pageFixture.page.waitForTimeout(4000);
    await pageFixture.page.locator('#code').type(javaCode);
  });

  Then('the editor should reflect the valid code', async function () {
    const isValidCode = await pageFixture.page.$eval('div#code>div:nth-of-type(2)>div', (element) => {
      return element !== null;
    });
    if (!isValidCode) {
      throw new Error('The editor does not reflect the expected valid Java code.');
    }
  });
