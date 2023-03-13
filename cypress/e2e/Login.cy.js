/// <reference types = "cypress"/>
import {openLoginPage} from '../support/helper';
import LoginWithUser from '../pages/LoginPO';

describe('Exam_UI', () => {

  it('Login', () => {

    openLoginPage();
    LoginWithUser.openRegform()
    LoginWithUser.fillFields()
    LoginWithUser.clickButtonSubmit()

    LoginWithUser.fillEmail();
    LoginWithUser.fillPassword();
    LoginWithUser.clickLoginButton();
    LoginWithUser.checkLoginWithUser();
  })

  it('Negative test. False Psw and Email', ()=>{
    openLoginPage();
    LoginWithUser.fillFalseEmail()
    LoginWithUser.fillFalsePassword();
    LoginWithUser.negativeTestCheckError()
    
  })

  it('Negative test. False Email', ()=>{
    openLoginPage();
    LoginWithUser.fillPassword();
    LoginWithUser.fillFalseEmail()
    LoginWithUser.negativeTestCheckError()
  })

  it('Negative test. False Password', ()=>{
    openLoginPage();
    LoginWithUser.fillEmail();
    LoginWithUser.fillFalsePassword();
    LoginWithUser.negativeTestCheckError()
  })


})
