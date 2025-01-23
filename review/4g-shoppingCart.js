const shoppingCart = {
    items: [
        { productName: "Apples", price: 8.59, quantity: 40},
        { productName: "Oranges", price: 12, quantity: 140},
    ],

    addItemToCart(item) {
        this.items.push(item)
    },
}

shoppingCart.addItemToCart({ productName: "Honey", price: 28.59, quantity: 10})
console.log(shoppingCart.items)