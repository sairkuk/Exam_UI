/// <reference types = "cypress"/>
import { faker } from '@faker-js/faker';
import user from '../fixtures/user.json'

user.comment = faker.random.words();

class Feedback{

    openRegform(){
        cy.log('Click link for registration');
        cy.get('#newCustomerLink .primary-link').click();
    }

    fillFieldsReg(){
        cy.log('Fill Email');
        cy.get('#emailControl').type(user.email).should('have.value', user.email);
    
        cy.log('Fill Password');
        cy.get('#passwordControl').type(user.password).should('have.value', user.password);
    
        cy.log('Fill repeat Password')
        cy.get('#repeatPasswordControl').type(user.password).should('have.value', user.password);
    
        cy.log('Choose questions')
        cy.get('.mat-form-field-infix.ng-tns-c119-16').click()
        cy.get('.mat-option-text').eq(1).click()
    
        cy.log('Answer questions')
        cy.get('#securityAnswerControl').type(user.answer)//.should('have.value', user.answer)
    }
    
    clickButtonSubmit(){
        cy.log('Click button ')
        cy.get('[type="submit"]').click();
    }

    openFormFeedback(){
    cy.log('Open form with Feedback')
    cy.get('[aria-label="Open Sidenav"]').click();
    cy.get('span .menu-text.truncate').contains(' Customer Feedback ').click();
     }
    typeComent(){
        cy.log('Type comment')
        cy.get('#comment').type(user.comment).should('contain.value', user.comment);
    }
    rating(){
        cy.log('Move rating')
        cy.get('.mat-slider-ticks-container').click('center', {force: true})
    }
    captcha(){
        cy.log('Captcha math')
        cy.get('#captcha').then(($div) => {
            const text = $div.text()
            cy.get('#captchaControl').type(eval(text)).should('have.value', eval(text) )
          })
    }
    submitButton(){
        cy.log('Click button')
        cy.get('#submitButton').click()
    }
    checkSendFeedback(){
        cy.log('check Send Feedback')
        cy.get('span.mat-simple-snack-bar-content').should('contain', 'Thank you for your feedback.')
    }
}
export default new Feedback();





