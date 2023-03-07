/// <reference types = "cypress"/>
import {openLoginPage} from '../support/helper';
import LoginWithUser from '../pages/LoginPO';
import FeedbackPO from '../pages/FeedbackPO';

describe('Exam_UI', () => {

    it('Feedback', () => {
        openLoginPage();
        LoginWithUser.fillEmail();
        LoginWithUser.fillPassword();
        LoginWithUser.clickLoginButton();
        LoginWithUser.checkLoginWithUser();

        FeedbackPO.openFormFeedback();
        FeedbackPO.typeComent();
        FeedbackPO.rating();
        FeedbackPO.captcha();
        FeedbackPO.submitButton();
        FeedbackPO.submitButton();   
    })
  })