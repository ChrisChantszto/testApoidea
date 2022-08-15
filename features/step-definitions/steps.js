const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

Given(/^I am on the home page$/, async () => {
    await LoginPage.open();
});

When(/^I click on the swiper$/, async() => {
    await LoginPage.swiper.click();
})

When(/^I click on the media icons$/, async() => {
    await LoginPage.digestIcon.click();
    await LoginPage.facebookIcon.click();
    await LoginPage.InstagramIcon.click();
})

When(/^I type with (\w+), (\w+) and (.+)$/, async (username, email, content) => {
    await LoginPage.downthePage.scrollIntoView();
    await LoginPage.inputUsername.setValue(username);
    await LoginPage.inputEmail.setValue(email);
    await LoginPage.inputContent.setValue(content)
    await LoginPage.btnPage.click();
    await LoginPage.submitBtn.click();
});

Then(/^I could see different page$/, async () => {
    const elem = await $("[class='col-6 col-md-3 my-3']")
    await expect(elem).toExist();
})

Then(/^I will be redirected to corresponding social media$/, async () => {
    const mdicons = await $("[class='icon-MD fa-2x text-light']");
    const fbicons = await $("[class='icon-facebook fa-2x text-light']")
    const igicons = await $("[class='icon-instagram fa-2x text-light']")
    await expect(mdicons).toExist();
    await expect(fbicons).toExist();
    await expect(igicons).toExist();
})

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

