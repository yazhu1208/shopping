let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    alert(`${productName} added to cart!`);
}

function viewCart() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    
    let cartDetails = "Your Cart:\n";
    let totalAmount = 0;
    
    cart.forEach((item, index) => {
        cartDetails += `${index + 1}. ${item.name} - $${item.price}\n`;
        totalAmount += item.price;
    });
    
    cartDetails += `\nTotal Amount: $${totalAmount}`;
    
    if (confirm(cartDetails + "\nProceed to payment?")) {
        processPayment(totalAmount);
    }
}

function processPayment(amount) {
    let paymentMethod = prompt(`Your total is $${amount}. Choose payment method: (Card/PayPal/Cash)`);
    
    if (paymentMethod) {
        alert("Payment successful! Your order has been placed.");
        cart = []; // Clear the cart after successful order
    } else {
        alert("Payment failed or canceled. Try again!");
    }
}