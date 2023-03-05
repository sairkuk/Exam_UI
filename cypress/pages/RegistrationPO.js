/// <reference types = "cypress"/>
import { faker } from '@faker-js/faker';
import user from '../fixtures/user.json'

user.email = faker.internet.email();
user.password = faker.internet.password();
user.answer = faker.name.firstName();

class FillFeldsForRegistration {
openRegform(){
    cy.log('Click link for registration');
    cy.get('#newCustomerLink .primary-link').click();
}

fillFields(){
    cy.log('Fill Email');
    cy.get('.mat-form-field-infix.ng-tns-c119-13').type(user.email)//.should('have.value', user.email);

    cy.log('Fill Password');
    cy.get('.mat-form-field-infix.ng-tns-c119-14').type(user.password)//.should('have.value', user.password);

    cy.log('Fill repeat Password')
    cy.get('#repeatPasswordControl').type(user.password).should('have.value', user.password);

    cy.log('Choose questions')
    cy.get('.mat-form-field-infix.ng-tns-c119-16').click()
    cy.get('.mat-option-text').eq(1).click()

    cy.log('Answer questions')
    cy.get('.mat-form-field-infix.ng-tns-c119-18').type(user.answer)//.should('have.value', user.answer)

}

clickButtonSubmit(){
    cy.log('Click button ')
    cy.get('[type="submit"]').click();
}
}
export default new FillFeldsForRegistration();