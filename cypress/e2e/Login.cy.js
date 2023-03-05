/// <reference types = "cypress"/>
import {openLogiPage} from '../support/helper';
import LoginWithUser from '../pages/LoginPO';

describe('Exam_UI', () => {

  it('Login', () => {

    openLogiPage();
    LoginWithUser.fillEmail();
    LoginWithUser.fillPassword();
    LoginWithUser.clickLoginButton();
    LoginWithUser.checkLoginWithUser();
  })
})