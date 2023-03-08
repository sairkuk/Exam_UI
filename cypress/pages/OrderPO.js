/// <reference types = "cypress"/>
import { faker } from '@faker-js/faker';
import user from '../fixtures/user.json'

//user.postcode = faker.address.zipCode('####');
//user.country = faker.country()
user.phoneNumber = faker.phone.number('1000000#')
user.userName = faker.internet.userName();
user.cardNumber = faker.finance.creditCardNumber('################')
user.country = faker.address.country()
user.city = faker.address.city();
user.postCode = faker.address.zipCode('####');
user.address = faker.address.streetAddress();
user.state = faker.address.direction();

class Order{
    addToBasket(){
        cy.log('add To Basket');
        cy.get('[aria-label="Add to Basket"]').click();
        //cy.get('span.mat-simple-snack-bar-content').should('contain', 'Placed Melon Bike (Comeback-Product 2018 Edition) into basket.')
    }
    goToBasket(){
        cy.log('Click basked');
        cy.get('.buttons.mat-button.ng-star-inserted').click();
        cy.log('Check basked page');
        cy.get('#price').should('contain', 'Total Price')
    }
    checkout(){
        cy.log('click button checkout');
        cy.get('#checkoutButton').click()
        cy.get('h1.ng-star-inserted').should('contain', 'Select an address' );
    }
    selectAddress(){
        cy.log('Add address');
        cy.get('[routerlink="/address/create"]').click()
    }
    fillFields(){
        cy.log('**Type country**')
        cy.get('[placeholder="Please provide a country."]').type(user.country).should('have.value', user.country)


        cy.log('Type Name')
        cy.get('[data-placeholder="Please provide a name."]').type(user.userName).should('have.value', user.userName)

        cy.log('Type Phone')
        cy.get('[data-placeholder="Please provide a mobile number."]').type(user.phoneNumber).should('have.value', user.phoneNumber)

        cy.log('Type ZipCode');
        cy.get('[data-placeholder="Please provide a ZIP code."]').type(user.postCode).should('have.value', user.postCode)

        cy.log('Type address');
        cy.get('[data-placeholder="Please provide an address."]').type(user.address).should('have.value', user.address)

        cy.log('Type city');
        cy.get('[data-placeholder="Please provide a city."]').type(user.city).should('have.value', user.city)

        cy.log('Type State');
        cy.get('[data-placeholder="Please provide a state."]').type(user.state).should('have.value', user.state)
    }
    clickButtonAddAddress(){
        cy.log('click Button Add Address');
        cy.get('#submitButton').click()
    }
    chooseAddress(){
        cy.log('choose Address')
        cy.get('span .mat-radio-outer-circle').eq(0).click({ force: true })
        cy.get('button.mat-focus-indicator.btn-next').click()  
    }
    chooseDelivery(){
        cy.log('Check page Delivery')
        cy.get('.addressCont.ng-star-inserted').should('contain', 'Delivery Address')
        cy.log('Choose a delivery speed')
        cy.get('.mat-cell.cdk-column-Selection').eq(1).click({ force: true });
        cy.get('button[aria-label="Proceed to delivery method selection"]').click()
    }
    addNewCard(){
        cy.log('Check page My Payment Options')
        cy.get('div[fxlayout="column"]').should('contain', 'My Payment Options')
        cy.log('open form with card')
        cy.get('.mat-expansion-panel-header-description').eq(0).click()
        cy.log('type user name')
        cy.get('[appearance="outline"] input[type="text"]').eq(0).type(user.userName).should('have.value', user.userName)
        cy.log('type user number card')
        cy.get('[type="number"]').type(user.cardNumber).should('have.value', user.cardNumber)
        cy.log('choose Expiry Month')
        cy.get('select[aria-required="true"]').eq(0).select(5).should('have.value', '6')
        cy.log('choose Expiry Year')
        cy.get('select[aria-required="true"]').eq(1).select(5).should('have.value', '2085')
        cy.log('click submit button')
        cy.get('#submitButton').click()
        cy.log('checking that the credit card is added ')
        cy.get('.mat-simple-snack-bar-content').should('contain', 'Your card ending')
    }
    chooseCardInList(){
        cy.log('choose card')
        cy.get('.mat-radio-outer-circle').eq(0).click({ force: true })
        cy.log('Click Continue')
        cy.get('[aria-label="Proceed to review"]').click() 
    }
    orderSummary(){
        cy.log('Check page Order Summary')
        cy.get('.order-summary').should('contain', 'Order Summary')
        cy.log('Click button "Place your order and pay"')
        cy.get('#checkoutButton').click()
        cy.log(' Checking that the purchase has been completed')
        cy.get('.confirmation').eq(0).should('contain', 'Thank you for your purchase!')

    }


}
export default new Order();


