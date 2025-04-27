class myAccountPage{
    elements = {
        myAccountTitle:()=> cy.get('span[data-ui-id="page-title-wrapper"]').contains('My Account'),
        successCreateAccountMessage:()=> cy.get('div[data-ui-id="message-success"]').children().contains('Thank you for registering with Main Website Store.'),
        dropdownCustomerBtn:()=> cy.get('li[class="customer-welcome"]').eq(0),
        signOutBtn:()=> cy.get('a[href]').contains('Sign Out')
    }

    successfullMessageCreateAccount(){
        this.elements.successCreateAccountMessage().should('be.visible')
    }

    validateMyAccountPage(firstname: string, lastname: string, email: string){
        this.elements.myAccountTitle().should('be.visible')
        cy.get('p').contains(firstname).should('be.visible')
        cy.get('p').contains(lastname).should('be.visible')
        cy.get('p').contains(email).should('be.visible')
    }

    user_logout(){
        this.elements.dropdownCustomerBtn().click()
        this.elements.signOutBtn().click()
    }
}

const myAccountPO = new myAccountPage()
export default myAccountPO