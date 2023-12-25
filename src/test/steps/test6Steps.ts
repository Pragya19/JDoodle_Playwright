import { Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from "../../hooks/pageFixture";

Given('I navigate to the JDoodle Online Java Compiler website for test6', async function () {
    await pageFixture.page.goto('https://www.jdoodle.com/online-java-compiler');
});

When('I click on the full-screen button', async function () {
  const fullScreenButtonSelector = "button.rounded-md.text-btn-secondary-hover";
  await pageFixture.page.click(fullScreenButtonSelector);
});

Then('the editor should expand to full screen', async function () {
    const isFullScreen = await pageFixture.page.$eval('div.section-quaternary.max-h-auto', (element) => {
      return element !== null;
    });
  
    if (!isFullScreen) {
      throw new Error('The editor is not in full-screen mode.');
    }
  });

When('I click on the exit full-screen button', async function () {
  const exitFullScreenButtonSelector = "//button[@class='rounded-md text-btn-secondary-hover']";
  await pageFixture.page.click(exitFullScreenButtonSelector);
});

Then('the editor should return to normal size', async function () {
    const isNormalSize = await pageFixture.page.$eval('div.section-quaternary.max-h-auto', (element) => {
      return element !== null;
    });
    if (!isNormalSize) {
      throw new Error('The editor is not in normal size.');
    }
  });
