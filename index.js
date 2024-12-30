class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity) {
        const cartItem = new ShoppingCartItem(product, quantity);
        this.items.push(cartItem);
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    getTotalItems() {
        return this.items.length;
    }

    displayCartItems() {
        this.items.forEach(item => {
            console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: ${item.getTotalPrice()}`);
        });
    }
}


const product1 = new Product(1, 'Laptop', 1000);
const product2 = new Product(2, 'Phone', 500);

const cart = new ShoppingCart();
cart.addItem(product1, 2);
cart.addItem(product2, 3);

console.log('Cart Items:');
cart.displayCartItems();

console.log('Total Items in Cart:', cart.getTotalItems());

cart.removeItem(1);

console.log('Cart Items after removing product with id 1:');
cart.displayCartItems();

console.log('Total Items in Cart:', cart.getTotalItems());