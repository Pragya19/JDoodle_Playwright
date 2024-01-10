import { Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from "../../hooks/pageFixture";
import assert from 'assert';


Given('I navigate to the JDoodle Online Java Compiler website for test5', async function () {
  await pageFixture.page.goto('https://www.jdoodle.com/online-java-compiler');
});


When('I click on various sample code links', async function () {
  const sampleLinks = await pageFixture.page.$$('.relative h-full print:hidden w-fit a');
  for (const link of sampleLinks) {
    await link.click();
    await pageFixture.page.waitForTimeout(5000);
  }
});

Then('the corresponding code should be populated in the editor', async function () {
  const editorCodeElement = await pageFixture.page.waitForSelector('#code');
  const editorCode = await editorCodeElement?.textContent();
  if (editorCode !== null && editorCode !== undefined) {
    const trimmedEditorCode = editorCode.replace(/^\s+|\s+$/g, '');
    assert.ok(trimmedEditorCode.length > 0, 'Expected editor code to be populated, but it is empty.');
  } else {
    console.error('Text content is null or undefined.');
  }
});

