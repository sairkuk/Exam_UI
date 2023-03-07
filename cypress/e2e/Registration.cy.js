/// <reference types = "cypress"/>
import {openLoginPage} from '../support/helper';
import FillFeldsForRegistration from '../pages/RegistrationPO';


describe('Exam_UI', () => {

  it('Registrarion', () => {
    
    openLoginPage();
    FillFeldsForRegistration.openRegform();
    FillFeldsForRegistration.fillFields();
    FillFeldsForRegistration.clickButtonSubmit();
  })


})