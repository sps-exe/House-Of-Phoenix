// ========================================
// CART PAGE JAVASCRIPT
// ========================================

// Function to load cart from main app.js
function loadCartPage() {
    let cartItemsList = document.getElementById('cartItemsList');
    let emptyCart = document.getElementById('emptyCart');
    
    // Check if cart is empty
    if (cart.length === 0) {
        emptyCart.style.display = 'block';
        return;
    }
    
    // Hide empty message
    emptyCart.style.display = 'none';
    
    // Clear current items
    cartItemsList.innerHTML = '';
    
    // Loop through cart and create HTML for each item
    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        
        // Create cart item HTML
        let itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <img src="./img/placeholder.png" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h3 class="cart-item-name">${item.name}</h3>
                <p class="cart-item-price">₹${item.price}</p>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="decreaseQuantity(${i})">-</button>
                    <span class="quantity-number" id="qty-${i}">1</span>
                    <button class="quantity-btn" onclick="increaseQuantity(${i})">+</button>
                </div>
            </div>
            <button class="remove-item-btn" onclick="removeItem(${i})">Remove</button>
        `;
        
        cartItemsList.appendChild(itemDiv);
    }
    
    // Update cart count in navbar
    updateCartCount();
    
    // Calculate and display totals
    calculateTotals();
}

// Function to increase quantity
function increaseQuantity(index) {
    let qtyElement = document.getElementById('qty-' + index);
    let currentQty = parseInt(qtyElement.innerText);
    currentQty = currentQty + 1;
    qtyElement.innerText = currentQty;
    
    calculateTotals();
}

// Function to decrease quantity
function decreaseQuantity(index) {
    let qtyElement = document.getElementById('qty-' + index);
    let currentQty = parseInt(qtyElement.innerText);
    
    if (currentQty > 1) {
        currentQty = currentQty - 1;
        qtyElement.innerText = currentQty;
        calculateTotals();
    }
}

// Function to remove item from cart
function removeItem(index) {
    // Ask for confirmation
    let confirmRemove = confirm("Remove " + cart[index].name + " from cart?");
    
    if (confirmRemove) {
        // Remove item from cart array
        let removed = [];
        for (let i = 0; i < cart.length; i++) {
            if (i !== index) {
                removed.push(cart[i]);
            }
        }
        cart = removed;
        
        // Reload the cart page
        loadCartPage();
    }
}

// Function to calculate totals
function calculateTotals() {
    let subtotal = 0;
    
    // Loop through all items
    for (let i = 0; i < cart.length; i++) {
        let qtyElement = document.getElementById('qty-' + i);
        if (qtyElement) {
            let quantity = parseInt(qtyElement.innerText);
            subtotal = subtotal + (cart[i].price * quantity);
        }
    }
    
    // Calculate tax (18%)
    let tax = (subtotal * 18) / 100;
    
    // Calculate total
    let total = subtotal + tax;
    
    // Update HTML
    document.getElementById('subtotal').innerText = '₹' + subtotal;
    document.getElementById('tax').innerText = '₹' + Math.round(tax);
    document.getElementById('total').innerText = '₹' + Math.round(total);
}

// Function to clear cart
function clearCartPage() {
    let confirmClear = confirm("Are you sure you want to clear your cart?");
    
    if (confirmClear) {
        cart = [];
        updateCartCount();
        loadCartPage();
    }
}

// Function to checkout
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    
    alert("🎉 Thank you for your order!\n\nYour order has been placed successfully!\n\nTotal: " + document.getElementById('total').innerText);
    
    // Clear cart after checkout
    cart = [];
    updateCartCount();
    loadCartPage();
}

// Load cart when page loads
window.onload = function() {
    loadCartPage();
};