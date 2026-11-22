const cart = [];
const DELIVERY_TAX = 0;

const menuItems = [
    { id: 1, name: "Lotus Drink", price: 5, category: "milk-shakes", img: "images/lotus.jpg" },
    { id: 2, name: "Mixed Berry", price: 6, category: "milk-shakes", img: "images/smoothiemixedberry.jpg" },
    { id: 3, name: "Cappuccino", price: 4, category: "coffee", img: "images/cappuccino.jpg" },
    { id: 4, name: "Espresso", price: 3, category: "coffee", img: "images/espresso.jpg" },
    { id: 5, name: "Tea and Peach", price: 3, category: "tea", img: "images/tea&peach.jpg" },
    { id: 6, name: "Tea", price: 3, category: "tea", img: "images/tea.jpg" },
    { id: 7, name: "Mango", price: 7, category: "smoothies", img: "images/mangosmoothie.jpg" },
    { id: 8, name: "Ice Coffee with Cookie Chocolate", price: 7, category: "coffee", img: "images/icecoffeecookie.jpg" },
    { id: 9, name: "Ice Coffee with Chocolate", price: 7, category: "coffee", img: "images/icecoffeechoco.jpg" },
    { id: 10, name: "Ice Coffee with Caramel", price: 7, category: "coffee", img: "images/icecoffeecaramel.jpg" },
    { id: 11, name: "Ice Coffee with Irish Cream", price: 7, category: "coffee", img: "images/icecoffeeirish.jpg" },
    { id: 12, name: "Ice Coffee with Toffee Crunch", price: 7, category: "coffee", img: "images/icecoffeetoffee.jpg" },
    { id: 13, name: "Strawberry", price: 6, category: "milk-shakes", img: "images/strawberrymilkshake.jpg" },
    { id: 14, name: "Double Chocolate", price: 6, category: "milk-shakes", img: "images/doublechocolatemilkshake.jpg" },
    { id: 15, name: "Oreo", price: 6, category: "milk-shakes", img: "images/oreomilkshake.jpg" },
    { id: 16, name: "Strawberry", price: 6, category: "smoothies", img: "images/strawberrysmoothie.jpg" },
    { id: 17, name: "Passion", price: 6, category: "smoothies", img: "images/passionsmoothie.jpg" },
    { id: 18, name: "Mango and Passion", price: 6, category: "smoothies", img: "images/mangopassionsmoothie.jpg" },
    { id: 19, name: "Blueberry", price: 6, category: "smoothies", img: "images/blueberrysmoothie.jpg" },
    { id: 20, name: "Tropical", price: 6, category: "smoothies", img: "images/tropicalsmoothie.jpg" },
    { id: 21, name: "Caramel Frappe", price: 6, category: "frappe", img: "images/frappecaramel.jpg" },
    { id: 22, name: "Chocolate Frappe", price: 6, category: "frappe", img: "images/frappechocolate.jpg" },
    { id: 23, name: "Irish Frappe", price: 6, category: "frappe", img: "images/irishfrappe.jpg" },
    { id: 24, name: "Coffee Frappe", price: 6, category: "frappe", img: "images/coffeefrappe.jpg" },
    { id: 25, name: "Irish Latte", price: 6, category: "latte", img: "images/irishlatte.jpg" },
    { id: 26, name: "Caramel Latte", price: 6, category: "latte", img: "images/caramellatte.jpg" },
    { id: 27, name: "Toffee Latte", price: 6, category: "latte", img: "images/toffeelatte.jpg" },
    { id: 28, name: "Cookies Latte", price: 6, category: "latte", img: "images/chocolatecookielatte.jpg" },
    { id: 29, name: "Hot Chocolate", price: 6, category: "latte", img: "images/hotchocolatelatte.jpg" },
    { id: 30, name: "Chocolate Latte", price: 6, category: "latte", img: "images/chocolatelatte.jpg" }
];

let toastTimeout;

function showToast(message) {
    const toast = document.getElementById("toast-message");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove("show");
    }, 1600);
}

function displayMenu() {
    menuItems.forEach(item => {
        const categoryDiv = document.getElementById(item.category);
        if (!categoryDiv) return;

        const itemDiv = document.createElement("div");
        itemDiv.classList.add("menu-item");
        itemDiv.innerHTML = `
            <img src="${item.img}" alt="${item.name}" loading="lazy">
            <div class="menu-item-body">
                <div>
                    <h4>${item.name}</h4>
                    <p class="item-price">$${item.price.toFixed(2)}</p>
                </div>
                <button type="button" class="add-btn" onclick="addToCart(${item.id})">Add to Cart</button>
            </div>
        `;
        categoryDiv.appendChild(itemDiv);
    });
}

function addToCart(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;

    const cartItem = cart.find(i => i.id === itemId);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    updateCart();
    showToast(`Added ${item.name}`);
}

function updateCart() {
    const cartList = document.getElementById("cart-list");
    const totalPriceEl = document.getElementById("total-price");
    const deliveryFeeEl = document.getElementById("delivery-fee");
    const placeOrderBtn = document.getElementById("place-order");
    const cartCount = document.getElementById("cart-count");
    const cartButton = document.getElementById("cart-button");

    cartList.innerHTML = "";

    let subtotal = 0;
    let totalItems = 0;

    if (cart.length === 0) {
        cartList.innerHTML = `<li class="cart-empty">No items in cart yet.</li>`;
    } else {
        cart.forEach(item => {
            subtotal += item.price * item.quantity;
            totalItems += item.quantity;

            const li = document.createElement("li");
            li.classList.add("cart-item-row");
            li.innerHTML = `
                <span><strong>${item.name}</strong> x ${item.quantity} ($${(item.price * item.quantity).toFixed(2)})</span>
                <button type="button" class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
            `;
            cartList.appendChild(li);
        });
    }

    const activeDeliveryFee = cart.length > 0 ? DELIVERY_TAX : 0;
    const totalPrice = subtotal + activeDeliveryFee;

    cartCount.textContent = totalItems;
    deliveryFeeEl.textContent = activeDeliveryFee.toFixed(2);
    totalPriceEl.textContent = totalPrice.toFixed(2);
    placeOrderBtn.disabled = cart.length === 0;

    if (cartButton) {
        cartButton.classList.toggle("active", totalItems > 0);
    }
}

function removeFromCart(itemId) {
    const cartItem = cart.find(i => i.id === itemId);
    if (!cartItem) return;

    if (cartItem.quantity > 1) {
        cartItem.quantity--;
    } else {
        const index = cart.indexOf(cartItem);
        cart.splice(index, 1);
    }
    updateCart();
}

// Handle Place Order
document.getElementById("place-order").addEventListener("click", function () {
    const totalPrice = document.getElementById("total-price").textContent;
    const phoneNumber = "96171232811";

    fetch("sales.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ cart: cart })
    })
    .then(response => response.text())
    .then(data => {
        console.log("Server response:", data);

        let orderText = "Order Details:\n";
        cart.forEach(item => {
            orderText += `${item.name} x ${item.quantity}\n`;
        });
        orderText += `\nTotal Price: $${totalPrice}`;

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(orderText)}`;
        window.open(whatsappURL, "_blank");

        cart.length = 0;
        updateCart();
        document.getElementById("cart-popup").classList.remove("show");
    })
    .catch(error => {
        console.error("Error saving order:", error);
        alert("Failed to save your order. Please try again.");
    });
});

// Cart Modal Open / Close
const cartPopup = document.getElementById("cart-popup");

document.getElementById("cart-button").addEventListener("click", function () {
    cartPopup.classList.toggle("show");
});

document.getElementById("close-cart").addEventListener("click", function () {
    cartPopup.classList.remove("show");
});

cartPopup.addEventListener("click", function (event) {
    if (event.target === cartPopup) {
        cartPopup.classList.remove("show");
    }
});

// Accordion Category Toggles
document.querySelectorAll(".menu-toggle").forEach(header => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        content.classList.toggle("hidden");
    });
});

// Category Filter Buttons
document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const selectedCategory = btn.dataset.category;

        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        document.querySelectorAll(".menu-group").forEach(group => {
            const groupCategory = group.dataset.group;
            const categoryList = group.querySelector(".menu-category");

            if (selectedCategory === "all" || groupCategory === selectedCategory) {
                group.classList.remove("filtered-out");
                if (categoryList) {
                    categoryList.classList.remove("hidden");
                }
            } else {
                group.classList.add("filtered-out");
            }
        });
    });
});

displayMenu();
updateCart();
