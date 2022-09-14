import Page from './page';

class LoginPage extends Page {
    
    //defining selectors using getter methods
    get LoginButton(){
        return $('#aa5d0088-aaff-46c7-b379-d0f100719d7f')
    }
    get inputEmail(){
        return $('#fbe26410-03d0-46de-81e3-1f927f5efcff')
    }
    get inputPassword(){
        return $('#1d62e007-e2b6-4f52-9d64-010dae87e4c7')
    }
    get signInButton(){
        return $('#ae9e73c4-9e36-4e2f-a56f-23033f7a90d2')
    }

    //method to login into the application
    async login (UserName, PassWord) {
        // const Login_btn = '~Login'
        // $(Login_btn).click()
        await this.LoginButton.click()
        await this.inputEmail.setValue(UserName)
        await this.inputPassword.setValue(PassWord)
        await this.signInButton.click()
    }

    // async verifyLanding()

    
    // async verifyLandingAfterLogon()
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
