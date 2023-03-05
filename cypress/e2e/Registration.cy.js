/// <reference types = "cypress"/>
import {openLogiPage} from '../support/helper';
import FillFeldsForRegistration from '../pages/RegistrationPO';


describe('Exam_UI', () => {

  it('Registrarion', () => {
    
    openLogiPage();
    FillFeldsForRegistration.openRegform();
    FillFeldsForRegistration.fillFields();
    FillFeldsForRegistration.clickButtonSubmit();
  })


})