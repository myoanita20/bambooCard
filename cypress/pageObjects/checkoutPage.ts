import GenerateUtils from "cypress/utils/generate"
import errorMessage from "../fixtures/error_message.json"
import testdata from "../fixtures/test_data.json"
class checkoutPage{
    

    elements = {
        emailTextfiel:()=> cy.get('input[id="customer-email"]'),
        firstnameTextfield: ()=> cy.get('input[name="firstname"]'),
        lastnameTextfield: ()=> cy.get('input[name="lastname"]'),
        streetTextfield: ()=> cy.get('input[name="street[0]"]'),
        countryDropdown:()=> cy.get('select[name="country_id"]'),
        countryIndonesiaOpt: ()=> 'option[data-title="Indonesia"]',
        cityTextfield: ()=> cy.get('input[name="city"]'),
        zipOrPostalCodeTextfield: ()=> cy.get('input[name="postcode"]'),
        phoneNumberTextfield:()=> cy.get('input[name="telephone"]'),
        nextBtn:()=> cy.get('button[type="submit"]').find('span').contains('Next'),
        paymentMethodTitle: ()=> cy.get('div[data-role="title"]').contains('Payment Method'),
        billingAddressDetail: ()=> cy.get('div[class="billing-address-details"]'),
        myBillingText: ()=> cy.get('label[for="billing-address-same-as-shipping-checkmo"]'),
        thankyouPurchaseText: ()=> cy.get('span[data-ui-id="page-title-wrapper"]').contains('Thank you for your purchase!'),
        continueShoppingBtn: ()=> cy.get('a[href]').contains('Continue Shopping'),
        placeOrderBtn: ()=> cy.get('button[type="submit"]').contains('Place Order')
    }

    fillOrderForm(firstname: string, lastname: string, address: string, phoneNumber: string, email: string){
        this.elements.emailTextfiel().first().type(email)
        this.elements.firstnameTextfield().type(firstname)
        this.elements.lastnameTextfield().type(lastname)
        this.elements.streetTextfield().type(address)
        this.elements.countryDropdown().select('ID')
        this.elements.cityTextfield().type(testdata.city)
        this.elements.zipOrPostalCodeTextfield().type(testdata.postalCode)
        this.elements.phoneNumberTextfield().type(phoneNumber)
    }

    validatePaymentMethod(address: string, phoneNumber: string){
        this.elements.paymentMethodTitle().should('be.visible')
        this.elements.myBillingText().should('be.visible')
        this.elements.billingAddressDetail().should('contain', address)
        this.elements.billingAddressDetail().should('contain', phoneNumber)
        this.elements.billingAddressDetail().should('contain', testdata.city)
        this.elements.billingAddressDetail().should('contain', testdata.postalCode)
        this.elements.billingAddressDetail().should('contain', testdata.country)
    }

    validateSuccessCreateOrder(){
        this.elements.thankyouPurchaseText().should('be.visible')
        this.elements.continueShoppingBtn().should('be.visible')
    }
}

const checkoutPO = new checkoutPage()
export default checkoutPO