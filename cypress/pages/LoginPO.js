/// <reference types = "cypress"/>
import user from '../fixtures/user.json'

class LoginWithUser{
    fillEmail(){
        cy.log('type Email in field');
        cy.get("#email").type(user.email).should('have.value', user.email);
    }
    fillPassword(){
        cy.log('type password in field');
        cy.get("#password").type(user.password).should('have.value', user.password);
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
