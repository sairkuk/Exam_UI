/// <reference types = "cypress"/>

class Order{
    addToBasket(){
        cy.log('add To Basket');
        cy.get('[aria-label="Add to Basket"]').click();
        //cy.get('.mat-simple-snack-bar-content').should('contain', 'Placed Melon Bike (Comeback-Product 2018 Edition) into basket.')
    }
    goToBasket(){
        
    }
}
export default new Order();
