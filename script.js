// Array to store cart items
let cart = [];

// Function to add items to the cart
function addToCart() {
    // Get the product name and price from the button's sibling elements
    const product = event.target.parentElement;
    const productName = product.querySelector('h3').textContent;
    const productPrice = parseFloat(product.querySelector('p').textContent.replace('$', ''));

    // Check if the item is already in the cart
    const existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
        // If the item exists, increase its quantity
        existingItem.quantity += 1;
    } else {
        // If the item does not exist, add a new item
        cart.push({
            name: productName,
            price: productPrice,
            quantity: 1
        });
    }

    // Update the cart display
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    
    // Clear the existing cart items
    cartItemsContainer.innerHTML = '';

    // Variable to store the total price
    let total = 0;

    // Loop through the cart and display items
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItemsContainer.appendChild(listItem);

        // Calculate total price
        total += item.price * item.quantity;
    });

    // Update total price in the cart
    totalElement.textContent = total.toFixed(2);
}
