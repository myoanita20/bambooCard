import errorMessage from "../fixtures/error_message.json"
import checkoutPO from "./checkoutPage"

class homepage{
    elements = {
        createAnAccountBtn: ()=> cy.get('a[href]').contains('Create an Account'),
        signInBtnHomepage:()=> cy.get('a[href]').contains('Sign In'),
        emailTextfield:()=> cy.get('input[id="email"]'),
        passwordTextfield:()=> cy.get('input[name="login[password]"]'),
        signInBtn:()=> cy.get('button[type="submit"]').contains('Sign In'),
        searchTextfield: ()=> cy.get('input[id="search"]'),
        productName: ()=> cy.get('a[class="product-item-link"]'),
        productPic: ()=> cy.get('img[class="product-image-photo"]'),
        addToCart: ()=> cy.get('button[type="submit"]').find('span').contains('Add to Cart'),
        addToWishList: ()=> cy.get('a[href]').find('span').contains('Add to Wish List'),
        cartIcon:()=> cy.get('a[class="action showcart"]'),
        proceedToCheckout:()=> cy.get('button[id="top-cart-btn-checkout"]')
    }
    
    user_click(button_name: string){
        let elementLocator: any
        switch(button_name){
            case 'Create an Account':
                elementLocator = this.elements.createAnAccountBtn()
                break

            case 'Sign In':
                elementLocator = this.elements.signInBtnHomepage()
                break
            
            case 'Add to Cart':
                elementLocator = this.elements.addToCart()
                break
            
            case 'Cart icon':
                elementLocator = this.elements.cartIcon()
                cy.wait(5000)
                break

            case 'Proceed to Checkout':
                elementLocator = this.elements.proceedToCheckout()
                break

            case 'Place Order':
                elementLocator = checkoutPO.elements.placeOrderBtn()
                break

            case 'Next':
                elementLocator = checkoutPO.elements.nextBtn()
                break
            
            case 'Add to Wishlist':
                elementLocator = this.elements.addToWishList()
                break
                
            default:
                throw new Error(errorMessage.buttonError)
        }
        elementLocator.click()
    }

    user_login(email: string, password: string){
        this.elements.emailTextfield().type(email)
        this.elements.passwordTextfield().type(password)
        this.elements.signInBtn().click()
    }

    validateSearchResult(searchText: string){
        this.elements.productName().each(($el) => {
            cy.wrap($el).should('contain', searchText);
          });
    }

    selectAproduct(productName: string){
        this.elements.productName().contains(productName).click()
        cy.wait(100)
    }
}

const homepagePO = new homepage()
export default homepagePO