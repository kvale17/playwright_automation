Feature: Checkout
    Scenario: Can add product to cart
        Given the user is viewing the catalog
        When the user selects a products options and clicks Add to Cart
        Then then the specified product is added to the cart
