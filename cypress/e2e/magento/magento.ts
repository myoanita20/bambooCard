const { Given, When, Then} = require("@badeball/cypress-cucumber-preprocessor")
import homepagePO from "../../pageObjects/homepage";
import createAccountPO from "../../pageObjects/createAccountPage";
import GenerateUtils from "../../utils/generate";
import myAccountPO from "../../pageObjects/myAccountPage";
import testdata from "../../fixtures/test_data.json"
import checkoutPO from "cypress/pageObjects/checkoutPage";

let firstname = GenerateUtils.generateRandomName(5)
let lastname = GenerateUtils.generateRandomName(5)
let email = GenerateUtils.generateEmail()
let password = GenerateUtils.generatePassword(8)
let searchText : string
let address = GenerateUtils.generateRandomName(10)
let phoneNumber = GenerateUtils.generateRandoPhoneNumber()

Given('user go to magento website',()=>{
    cy.visit('/')
})

When('user click {string}',(button_name: string)=>{
    homepagePO.user_click(button_name)
})

Then('validate create user account page', ()=>{
    createAccountPO.validateCreateAccountPage()
})

When('user fill create account form',()=>{
    createAccountPO.fillCreateAccountForm(email, firstname,lastname,password)
})

When('user click {string} in create account page', (buttonName: string)=>{
    createAccountPO.user_click(buttonName)
})

Then('user should redirect to My Account page', ()=>{
    myAccountPO.successfullMessageCreateAccount()
    myAccountPO.validateMyAccountPage(firstname,lastname,email)
})

When('user logout', ()=>{
    myAccountPO.user_logout()
})

When('user login again',()=>{
    homepagePO.user_click('Sign In')
    homepagePO.user_login(email, password)
})

Then('user should redirect to my account page',()=>{
    myAccountPO.validateMyAccountPage(firstname,lastname,email)
})

Given('user login to magento website',()=>{
    homepagePO.user_click('Sign In')
    homepagePO.user_login(testdata.email, testdata.password)
})

When('user search {string}', (search_text: string)=>{
    searchText = search_text
    homepagePO.elements.searchTextfield().type(search_text + "{enter}")
})

Then('user validate the result',()=>{
    homepagePO.validateSearchResult(searchText)
})

When('user click {string} for {string}',(buttonName: string, productNamme: string)=>{
    homepagePO.selectAproduct(productNamme)
    homepagePO.user_click(buttonName)
})

When('user fill checkout form',()=>{
    cy.wait(5000)
    checkoutPO.fillOrderForm(firstname, lastname, address, phoneNumber, email)
    cy.wait(10000)
})

Then('user validate payment method page',()=>{
    checkoutPO.validatePaymentMethod(address, phoneNumber)
})

Then('user successfully create an order', ()=>{
    checkoutPO.validateSuccessCreateOrder()
})

