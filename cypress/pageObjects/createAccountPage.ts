import errorMessage from "../fixtures/error_message.json"
class createAccountPage{
    elements = {
        pageTitle: ()=> cy.get('span[data-ui-id="page-title-wrapper"]').contains('Create New Customer Account'),
        personalInformationTxt: ()=> cy.get('span').contains('Personal Information'),
        firstnameTextfield: ()=> cy.get('input[id="firstname"]'),
        lastnameTextfield: ()=> cy.get('input[id="lastname"]'),
        emailTextfield: ()=> cy.get('input[id="email_address"]'),
        passwordTextfield: ()=> cy.get('input[id="password"]'),
        passwordConfirmationTextfield: ()=> cy.get('input[id="password-confirmation"]'),
        createAnAccountBtn:()=> cy.get('button[type="submit"]').contains('Create an Account')
    }
    
    validateCreateAccountPage(){
        this.elements.pageTitle().should('be.visible')
        this.elements.personalInformationTxt().should('be.visible')
        this.elements.firstnameTextfield().should('have.attr', 'aria-required', 'true')
        this.elements.lastnameTextfield().should('have.attr', 'aria-required', 'true')
        this.elements.emailTextfield().should('have.attr', 'aria-required', 'true')
        this.elements.passwordTextfield().should('have.attr', 'aria-required', 'true')
        this.elements.passwordConfirmationTextfield().should('have.attr', 'aria-required', 'true')
        this.elements.createAnAccountBtn().should('be.visible')
    }

    fillCreateAccountForm(email:string,firstname: string, lastname: string, password: string){
        this.elements.firstnameTextfield().type(firstname)
        this.elements.lastnameTextfield().type(lastname)
        this.elements.emailTextfield().type(email)
        this.elements.passwordTextfield().type(password)
        this.elements.passwordConfirmationTextfield().type(password)
    }

    user_click(button_name: string){
        let elementLocator: any
        switch(button_name){
            case 'Create an Account':
                elementLocator = this.elements.createAnAccountBtn()
                break

            default:
                throw new Error(errorMessage.buttonError)
        }
        elementLocator.click()
    }
}

const createAccountPO = new createAccountPage()
export default createAccountPO