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

  it('Negative test. Empy Psw and Email', ()=>{
    openLoginPage();
    LoginWithUser.negativeTestCheckError()
  })

  it('Negative test. Empy Email', ()=>{
    openLoginPage();
    LoginWithUser.fillPassword();
    LoginWithUser.negativeTestCheckError()
  })

  it('Negative test. Empy Password', ()=>{
    openLoginPage();
    LoginWithUser.fillEmail();
    LoginWithUser.negativeTestCheckError()
  })


})
