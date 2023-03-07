/// <reference types = "cypress"/>
import { faker } from '@faker-js/faker';
import user from '../fixtures/user.json'

user.comment = faker.random.words();

class Feedback{
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
            cy.get('#captchaControl').type(eval(text))
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





