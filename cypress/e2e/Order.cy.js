/// <reference types = "cypress"/>
import {openLogiPage, findProductOnMainPage} from '../support/helper';
import LoginWithUser from '../pages/LoginPO';
import Order from '../pages/OrderPO';

describe('Exam_UI', () => {

  it('Order', () => {

    openLogiPage();

    LoginWithUser.fillEmail();
    LoginWithUser.fillPassword();
    LoginWithUser.clickLoginButton();
    LoginWithUser.checkLoginWithUser();

    findProductOnMainPage();
    
    Order.addToBasket();


  })
})