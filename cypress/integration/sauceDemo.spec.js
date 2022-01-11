import * as functionLogin from '../actions/functionLogin.js'
describe('INSCRIPTION', () => {
    beforeEach(() => {

        cy.viewport('iphone-6')
        cy.visit('https://www.saucedemo.com/')


    })
    it('goodAuthentification', () => {
        functionLogin.login('standard_user', 'secret_sauce')
        cy.url().should('contains', '/inventory.html')
    })
    it('badAuthentificationPassword', () => {
        functionLogin.login('standard_user', 'çaMarchePas')
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')

    })
    it('badAuthentificationUserName', () => {
        functionLogin.login('problem1_user', 'secret_sauce')
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')

    })
    it('blockedAuthentification', () => {
        functionLogin.login('locked_out_user', 'secret_sauce')
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')



    })
})
