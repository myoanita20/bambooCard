Feature: All scenario for automation

    Scenario: Registration flow with login validation
        Given user go to magento website
        When user click "Create an Account"
        Then validate create user account page
        When user fill create account form
        And user click "Create an Account" in create account page
        Then user should redirect to My Account page
        When user logout
        And user login again
        Then user should redirect to my account page

    Scenario: Place order with multiple products
        Given user go to magento website
        When user search "Tote"
        And user click "Add to Cart" for "Savvy Shoulder Tote"
        And user search "Tote"
        And user click "Add to Cart" for "Compete Track Tote"
        And user click "Cart icon"
        And user click "Proceed to Checkout"
        And user fill checkout form
        And user click "Next"
        Then user validate payment method page
        When user click "Place Order"
        Then user successfully create an order

    Scenario: Add products in Wishlist and checkout from wishlist
        Given user go to magento website
        And user login to magento website
        When user search "Tote"
        And user click "Wishlist icon" for "Savvy Shoulder Tote"
        Then validate product added to wishlist page
        When user click "Add All to Cart"
        And user click "Cart icon"
        And user click "Proceed to Checkout"
        And user click "Next"
        And user validate payment method page
        And user click "Place Order"
        Then user successfully create an order

    Scenario: Search and validate results
        Given user go to magento website
        When user search "Tote"
        Then user validate the result