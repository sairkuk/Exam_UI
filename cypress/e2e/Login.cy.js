/// <reference types = "cypress"/>
import {openLoginPage} from '../support/helper';
import LoginWithUser from '../pages/LoginPO';

describe('Exam_UI', () => {

  it('Login', () => {

    openLoginPage();
    LoginWithUser.fillEmail();
    LoginWithUser.fillPassword();
    LoginWithUser.clickLoginButton();
    LoginWithUser.checkLoginWithUser();
  })
})