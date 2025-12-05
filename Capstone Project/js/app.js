// ========================================
// HOUSE OF PHOENIX - Simple JavaScript
// ========================================

// 1. CART SYSTEM (Using Array)
let cart = []; // Empty array to store cart items

// Function to add item to cart
function addToCart(productName, price) {
    // Create a simple object for the product
    let product = {
        name: productName,
        price: price
    };
    
    // Add product to cart array
    cart.push(product);
    
    // Show success message
    alert("✅ " + productName + " added to cart!");
    
    // Update cart count
    updateCartCount();
}

// Function to update cart count badge
function updateCartCount() {
    let count = cart.length; // Count items in cart
    
    // Display count in console
    console.log("Cart has " + count + " items");
    
    // Update the cart count badge in HTML
    let cartBadge = document.getElementById('cartCount');
    if (cartBadge) {
        cartBadge.innerText = count;
    }
}

// Function to show all cart items
function showCart() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    
    let message = "🛒 Your Cart:\n\n";
    let total = 0;
    
    // Loop through cart items
    for (let i = 0; i < cart.length; i++) {
        message += (i + 1) + ". " + cart[i].name + " - ₹" + cart[i].price + "\n";
        total += cart[i].price;
    }
    
    message += "\n💰 Total: ₹" + total;
    alert(message);
}

// Function to clear cart
function clearCart() {
    cart = [];
    alert("🗑️ Cart cleared!");
    updateCartCount();
}


// ========================================
// 2. WISHLIST SYSTEM (Using Array)
// ========================================
let wishlist = [];

// Function to add to wishlist
function addToWishlist(productName) {
    // Check if already in wishlist
    let alreadyExists = false;
    
    for (let i = 0; i < wishlist.length; i++) {
        if (wishlist[i] === productName) {
            alreadyExists = true;
            break;
        }
    }
    
    if (alreadyExists) {
        alert("❤️ Already in wishlist!");
    } else {
        wishlist.push(productName);
        alert("💖 " + productName + " added to wishlist!");
    }
}

// Function to show wishlist
function showWishlist() {
    if (wishlist.length === 0) {
        alert("Your wishlist is empty!");
        return;
    }
    
    let message = "💖 Your Wishlist:\n\n";
    
    for (let i = 0; i < wishlist.length; i++) {
        message += (i + 1) + ". " + wishlist[i] + "\n";
    }
    
    alert(message);
}


// ========================================
// 3. SEARCH FUNCTION (Simple)
// ========================================

// Array of all products
let allProducts = [
    "Classic Leather Jacket",
    "Denim Shirt",
    "Formal Suit",
    "Casual T-Shirt",
    "Winter Coat",
    "Sports Sneakers",
    "Smartwatch",
    "Elegant Silk Dress",
    "Formal Blazer Set",
    "Casual Crop Top",
    "Winter Trench Coat",
    "Party Gown",
    "Classic Denim Jacket",
    "Office Kurti",
    "Apple Watch SE",
    "Nothing Ear (3)",
    "Google Pixel 9a",
    "Meta Quest 3",
    "DJI Mini 2 SE",
    "Logitech G Pro X Keyboard",
    "Bose Frames Tempo"
];

// Function to handle search button click
function handleSearch() {
    let searchInput = document.getElementById('searchInput');
    let searchText = searchInput.value;
    
    if (searchText === "" || searchText === null) {
        alert("⚠️ Please enter something to search!");
        return;
    }
    
    searchProduct(searchText);
}

// Function to search products
function searchProduct(searchText) {
    let results = [];
    
    // Convert search text to lowercase for easier matching
    searchText = searchText.toLowerCase();
    
    // Loop through all products
    for (let i = 0; i < allProducts.length; i++) {
        let productName = allProducts[i].toLowerCase();
        
        // Check if product name contains search text
        if (productName.indexOf(searchText) !== -1) {
            results.push(allProducts[i]);
        }
    }
    
    // Show results
    if (results.length === 0) {
        alert("❌ No products found for '" + searchText + "'");
    } else {
        let message = "🔍 Found " + results.length + " products:\n\n";
        for (let i = 0; i < results.length; i++) {
            message += (i + 1) + ". " + results[i] + "\n";
        }
        alert(message);
    }
}


// ========================================
// 4. SLIDESHOW (Simple Auto-Change)
// ========================================

let currentSlide = 0;
let slides = document.querySelectorAll('.slide');

function showSlide() {
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = '0';
    }
    
    // Show current slide
    if (slides.length > 0) {
        slides[currentSlide].style.opacity = '1';
    }
    
    // Move to next slide
    currentSlide = currentSlide + 1;
    
    // Reset to first slide if reached end
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    
    // Change slide every 3 seconds
    setTimeout(showSlide, 3000);
}

// Start slideshow when page loads
if (slides.length > 0) {
    showSlide();
}


// ========================================
// 5. SCROLL TO SECTION (Smooth)
// ========================================

function scrollToSection(sectionId) {
    let section = document.getElementById(sectionId);
    
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}


// ========================================
// 6. CALCULATE DISCOUNT
// ========================================

function calculateDiscount(originalPrice, discountPercent) {
    let discount = (originalPrice * discountPercent) / 100;
    let finalPrice = originalPrice - discount;
    
    console.log("Original Price: ₹" + originalPrice);
    console.log("Discount: " + discountPercent + "%");
    console.log("You Save: ₹" + discount);
    console.log("Final Price: ₹" + finalPrice);
    
    return finalPrice;
}


// ========================================
// WHEN PAGE LOADS - DO THIS
// ========================================

console.log("✅ House of Phoenix JavaScript Loaded!");
console.log("🛍️ All features are now working!");
console.log("Try clicking the buttons to test!");
document.addEventListener('DOMContentLoaded', function() {
    // Create hamburger menu if it doesn't exist
    const navLeft = document.querySelector('.nav-left');
    if (navLeft && !document.querySelector('.hamburger')) {
        const hamburger = document.createElement('div');
        hamburger.className = 'hamburger';
        hamburger.innerHTML = '<span></span><span></span><span></span>';
        navLeft.appendChild(hamburger);
        
        // Add click event
        hamburger.addEventListener('click', toggleMenu);
    }
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const menu = document.querySelector('.nav-links');
            const hamburger = document.querySelector('.hamburger');
            if (menu && hamburger) {
                menu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        const menu = document.querySelector('.nav-links');
        const hamburger = document.querySelector('.hamburger');
        const navLeft = document.querySelector('.nav-left');
        
        if (menu && hamburger && navLeft) {
            if (!navLeft.contains(e.target) && menu.classList.contains('active')) {
                menu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });
});

// Function to toggle mobile menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    if (navLinks && hamburger) {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    }
}

console.log("✅ Mobile menu ready!");
