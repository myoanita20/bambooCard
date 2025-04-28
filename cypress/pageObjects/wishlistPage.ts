import checkoutPO from "./checkoutPage";
import homepagePO from "./homepage";

class wishlistPage{
    elements = {
        myAccountTitle:()=> cy.get('span[data-ui-id="page-title-wrapper"]').contains('My Wish List'),
            successAddToWishlist:()=> cy.get('div[data-ui-id="message-success"'),
            productWishlist:()=> cy.get('div[class="products-grid wishlist"]').find('strong[class="product-item-name"]')
    }

    validateWishlist(productName: string){
        this.elements.successAddToWishlist().should('be.visible')
        cy.log(productName)
        this.elements.productWishlist().each(($el) => {
            cy.wrap($el).contains(productName).should('be.visible')
        });
    }
    
}

const wishlistPO = new wishlistPage()
export default wishlistPO