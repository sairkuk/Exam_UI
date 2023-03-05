
export function openLogiPage(){
    cy.log('**Open website registration**')
    cy.visit('/')
    cy.get('[color="primary"].mat-focus-indicator ').click()
    cy.log('**Open login page**')
    cy.get('#navbarAccount').click()
    cy.get('#navbarLoginButton').click()

}

export function findProductOnMainPage(){
    cy.log('Click search button');
    cy.get('.ng-tns-c254-1.mat-search_icon-search').click();
    cy.get('#mat-input-0').type('Melon Bike{enter}');

}