/// <reference types = "cypress"/>
import user from '../fixtures/user.json'
import { faker } from '@faker-js/faker';


user.email = faker.internet.email();
user.password = faker.internet.password();
user.answer = faker.name.firstName();

class LoginWithUser{

    openRegform(){
        cy.log('Click link for registration');
        cy.get('#newCustomerLink .primary-link').click();
    }

    fillFields(){
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

    fillEmail(){
        cy.log('type Email in field');
        cy.get("#email").type(user.email).should('have.value', user.email);
    }
    fillFalseEmail(){
        cy.log('type Email in field');
        cy.get("#email").type('False@email').should('have.value', 'False@email');
    }
    fillPassword(){
        cy.log('type password in field');
        cy.get("#password").type(user.password).should('have.value', user.password);
    }
    fillFalsePassword(){
        cy.log('type password in field');
        cy.get("#password").type('FalsePassword').should('have.value', 'FalsePassword');
    }
    clickLoginButton(){
        cy.log('click Login Button');
        cy.get('#loginButton').click();
        
    }
    checkLoginWithUser(){
        cy.log('check Login With User');
        cy.get('#navbarAccount').click();
        cy.get('[aria-label="Go to user profile"]').eq(1).should('contain',user.email ); 
        cy.get('[aria-label="Go to user profile"]').eq(1).type('{esc}');
               
    }
    negativeTestCheckError(){
        cy.log('click Login Button');
        cy.get('#loginButton').click({force: true});
        cy.get('.error.ng-star-inserted').should('contain', 'Invalid email or password.')
    }
    
}
export default new LoginWithUser();
