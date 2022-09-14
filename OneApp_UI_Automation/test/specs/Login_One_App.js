import LoginPage from '../pageobjects/login.page';
import TestData from '../../data/TestData';

describe('My Login application', () => {
    // it('should login with valid credentials', async () => {
    //     await LoginPage.open();

    //     await LoginPage.login('tomsmith', 'SuperSecretPassword!');
    //     await expect(SecurePage.flashAlert).toBeExisting();
    //     await expect(SecurePage.flashAlert).toHaveTextContaining(
    //         'You logged into a secure area!');
    // });

    it.only('Login into One App',async () => {
        // const Login_btn = '~Login'
        // $(Login_btn).click()
        // browser.pause(3000)
        await LoginPage.login(TestData.CreditCard_User.Username, TestData.CreditCard_User.Password)

    });
});


