const WHATSAPP_NUMBER = "96171232811";
const DELIVERY_FEE = 0; // Update this when delivery pricing is confirmed.
const cart = [];

const menuItems = [
  {
    id: 1,
    name: "Lotus Drink",
    price: 5,
    category: "milk-shakes",
    img: "images/lotus.jpg",
    note: "A creamy lotus-flavored treat",
  },
  {
    id: 2,
    name: "Mixed Berry",
    price: 6,
    category: "milk-shakes",
    img: "images/smoothiemixedberry.jpg",
    note: "A berry-filled favorite",
  },
  {
    id: 3,
    name: "Cappuccino",
    price: 4,
    category: "coffee",
    img: "images/cappuccino.jpg",
    note: "Espresso with silky milk foam",
  },
  {
    id: 4,
    name: "Espresso",
    price: 3,
    category: "coffee",
    img: "images/espresso.jpg",
    note: "A little cup of bold coffee",
  },
  {
    id: 5,
    name: "Tea and Peach",
    price: 3,
    category: "tea",
    img: "images/tea&peach.jpg",
    note: "A refreshing fruity tea",
  },
  {
    id: 6,
    name: "Tea",
    price: 3,
    category: "tea",
    img: "images/tea.jpg",
    note: "A comforting classic",
  },
  {
    id: 7,
    name: "Mango",
    price: 7,
    category: "smoothies",
    img: "images/mangosmoothie.jpg",
    note: "Bright, tropical mango",
  },
  {
    id: 8,
    name: "Ice Coffee with Cookie Chocolate",
    price: 7,
    category: "coffee",
    img: "images/icecoffeecookie.jpg",
    note: "Iced coffee with a cookie twist",
  },
  {
    id: 9,
    name: "Ice Coffee with Chocolate",
    price: 7,
    category: "coffee",
    img: "images/icecoffeechoco.jpg",
    note: "Coffee meets chocolate",
  },
  {
    id: 10,
    name: "Ice Coffee with Caramel",
    price: 7,
    category: "coffee",
    img: "images/icecoffeecaramel.jpg",
    note: "Smooth coffee and caramel",
  },
  {
    id: 11,
    name: "Ice Coffee with Irish Cream",
    price: 7,
    category: "coffee",
    img: "images/icecoffeeirish.jpg",
    note: "A rich, creamy iced coffee",
  },
  {
    id: 12,
    name: "Ice Coffee with Toffee Crunch",
    price: 7,
    category: "coffee",
    img: "images/icecoffeetoffee.jpg",
    note: "Sweet toffee with a little crunch",
  },
  {
    id: 13,
    name: "Strawberry",
    price: 6,
    category: "milk-shakes",
    img: "images/strawberrymilkshake.jpg",
    note: "A strawberry milkshake classic",
  },
  {
    id: 14,
    name: "Double Chocolate",
    price: 6,
    category: "milk-shakes",
    img: "images/doublechocolatemilkshake.jpg",
    note: "For the chocolate lovers",
  },
  {
    id: 15,
    name: "Oreo",
    price: 6,
    category: "milk-shakes",
    img: "images/oreomilkshake.jpg",
    note: "Cookies, cream and goodness",
  },
  {
    id: 16,
    name: "Strawberry",
    price: 6,
    category: "smoothies",
    img: "images/strawberrysmoothie.jpg",
    note: "Fresh strawberry flavor",
  },
  {
    id: 17,
    name: "Passion",
    price: 6,
    category: "smoothies",
    img: "images/passionsmoothie.jpg",
    note: "A tropical passion fruit blend",
  },
  {
    id: 18,
    name: "Mango and Passion",
    price: 6,
    category: "smoothies",
    img: "images/mangopassionsmoothie.jpg",
    note: "A sunny tropical combination",
  },
  {
    id: 19,
    name: "Blueberry",
    price: 6,
    category: "smoothies",
    img: "images/blueberrysmoothie.jpg",
    note: "A smooth blueberry blend",
  },
  {
    id: 20,
    name: "Tropical",
    price: 6,
    category: "smoothies",
    img: "images/tropicalsmoothie.jpg",
    note: "A taste of the tropics",
  },
  {
    id: 21,
    name: "Caramel Frappe",
    price: 6,
    category: "frappe",
    img: "images/frappecaramel.jpg",
    note: "Blended coffee with caramel",
  },
  {
    id: 22,
    name: "Chocolate Frappe",
    price: 6,
    category: "frappe",
    img: "images/frappechocolate.jpg",
    note: "A chilled chocolate favorite",
  },
  {
    id: 23,
    name: "Irish Frappe",
    price: 6,
    category: "frappe",
    img: "images/irishfrappe.jpg",
    note: "A creamy frappe with Irish cream flavor",
  },
  {
    id: 24,
    name: "Coffee Frappe",
    price: 6,
    category: "frappe",
    img: "images/coffeefrappe.jpg",
    note: "A cool coffee pick-me-up",
  },
  {
    id: 25,
    name: "Irish Latte",
    price: 6,
    category: "latte",
    img: "images/irishlatte.jpg",
    note: "Espresso, milk and Irish cream flavor",
  },
  {
    id: 26,
    name: "Caramel Latte",
    price: 6,
    category: "latte",
    img: "images/caramellatte.jpg",
    note: "A smooth caramel latte",
  },
  {
    id: 27,
    name: "Toffee Latte",
    price: 6,
    category: "latte",
    img: "images/toffeelatte.jpg",
    note: "A sweet toffee coffee moment",
  },
  {
    id: 28,
    name: "Cookies Latte",
    price: 6,
    category: "latte",
    img: "images/chocolatecookielatte.jpg",
    note: "A cookie-inspired latte",
  },
  {
    id: 29,
    name: "Hot Chocolate",
    price: 6,
    category: "latte",
    img: "images/hotchocolatelatte.jpg",
    note: "A cozy chocolate classic",
  },
  {
    id: 30,
    name: "Chocolate Latte",
    price: 6,
    category: "latte",
    img: "images/chocolatelatte.jpg",
    note: "Chocolate and espresso together",
  },
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
let toastTimeout;

function showToast(message) {
  const toast = $("#toast-message");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 1900);
}

function categoryLabel(category) {
  return (
    {
      coffee: "Coffee",
      latte: "Latte",
      frappe: "Frappe",
      "milk-shakes": "Milk shake",
      smoothies: "Smoothie",
      tea: "Tea",
    }[category] || category
  );
}

function renderMenu(category = "all") {
  const grid = $("#menu-grid");
  const categoryOrder = [
    "coffee",
    "latte",
    "frappe",
    "milk-shakes",
    "smoothies",
    "tea",
  ];
  const items = menuItems
    .filter((item) => category === "all" || item.category === category)
    .sort(
      (a, b) =>
        categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category) ||
        a.name.localeCompare(b.name),
    );
  grid.innerHTML = items
    .map(
      (item, index) => `
    <article class="menu-card" style="animation-delay:${Math.min(index * 22, 220)}ms">
      <div class="product-image-wrap">
        <img class="product-image" src="${escapeHTML(item.img)}" alt="${escapeHTML(item.name)}" loading="lazy"
          onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80';">
        
        
      </div>
      <div class="product-info">
        <div class="product-info-top"><div><span class="product-overline">FAKIH FAVOURITE</span><h3>${escapeHTML(item.name)}</h3></div><span class="product-price">$${item.price.toFixed(2)}</span></div>
        <p class="product-note">${escapeHTML(item.note)}</p>
        <button class="add-btn" type="button" data-add="${item.id}" aria-label="Add ${escapeHTML(item.name)} to order"><span>Add</span><b aria-hidden="true">+</b></button>
      </div>
    </article>`,
    )
    .join("");
  $("#menu-empty").hidden = items.length !== 0;
}

function escapeHTML(value) {
  return String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ],
  );
}

function addToCart(id) {
  const product = menuItems.find((item) => item.id === Number(id));
  if (!product) return;
  const existing = cart.find((item) => item.id === product.id);
  existing ? existing.quantity++ : cart.push({ ...product, quantity: 1 });
  updateCart();
  showToast(`${product.name} added to your order`);
}

function changeQuantity(id, delta) {
  const item = cart.find((product) => product.id === Number(id));
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) cart.splice(cart.indexOf(item), 1);
  updateCart();
}

function updateCart() {
  const list = $("#cart-list");
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const fee = cart.length ? DELIVERY_FEE : 0;
  $("#cart-count").textContent = count;
  $("#delivery-fee").textContent = fee.toFixed(2);
  $("#total-price").textContent = (subtotal + fee).toFixed(2);
  $("#place-order").disabled = cart.length === 0;
  list.innerHTML = cart.length
    ? cart
        .map(
          (item) => `
    <li class="cart-item">
      <div><div class="cart-item-name">${escapeHTML(item.name)}</div><div class="cart-item-meta">$${item.price.toFixed(2)} each · $${(item.price * item.quantity).toFixed(2)}</div></div>
      <div class="cart-item-controls">
        <button class="qty-btn" data-quantity="${item.id}" data-delta="-1" aria-label="Decrease ${escapeHTML(item.name)} quantity">-</button>
        <strong>${item.quantity}</strong>
        <button class="qty-btn" data-quantity="${item.id}" data-delta="1" aria-label="Increase ${escapeHTML(item.name)} quantity">+</button>
      </div>
    </li>`,
        )
        .join("")
    : '<li class="cart-empty">Your order is waiting for something delicious.<br>Explore the menu and add a favorite.</li>';
}

function openCart() {
  $("#cart-popup").classList.add("show");
  $("#cart-popup").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  $("#close-cart").focus();
}
function closeCart() {
  $("#cart-popup").classList.remove("show");
  $("#cart-popup").setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  $("#cart-button").focus();
}

async function placeOrder() {
  if (!cart.length) return;
  const button = $("#place-order");
  const original = button.innerHTML;
  button.disabled = true;
  button.textContent = "Preparing your order…";
  const total = $("#total-price").textContent;
  const order = cart.map((item) => ({
    id: item.id,
    name: item.name,
    price: item.price,
    quantity: item.quantity,
    category: item.category,
  }));
  const lines = [
    "Hello Fakih Cafe! I'd like to place an order:",
    "",
    ...cart.map(
      (item) =>
        `${item.name} x ${item.quantity} — $${(item.price * item.quantity).toFixed(2)}`,
    ),
    "",
    `Delivery fee: $${$("#delivery-fee").textContent}`,
    `Total: $${total}`,
  ];
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;

  // Save to sales.php when available. WhatsApp remains the ordering path if the endpoint is unavailable.
  try {
    const response = await fetch("sales.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart: order }),
    });
    if (!response.ok)
      throw new Error(`Sales endpoint returned ${response.status}`);
  } catch (error) {
    console.warn(
      "Could not save order to sales.php; continuing to WhatsApp.",
      error,
    );
  }

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  cart.length = 0;
  updateCart();
  closeCart();
  button.innerHTML = original;
  showToast("Your WhatsApp order is ready");
}

document.addEventListener("click", (event) => {
  const add = event.target.closest("[data-add]");
  if (add) addToCart(add.dataset.add);
  const qty = event.target.closest("[data-quantity]");
  if (qty) changeQuantity(qty.dataset.quantity, Number(qty.dataset.delta));
  const filter = event.target.closest(".filter-btn");
  if (filter) {
    $$(".filter-btn").forEach((button) =>
      button.classList.toggle("active", button === filter),
    );
    renderMenu(filter.dataset.category);
  }
});

$("#cart-button").addEventListener("click", openCart);
$("#close-cart").addEventListener("click", closeCart);
$("#cart-popup").addEventListener("click", (event) => {
  if (event.target === $("#cart-popup")) closeCart();
});
$("#place-order").addEventListener("click", placeOrder);
$("#mobile-menu-toggle").addEventListener("click", () => {
  const nav = $("#main-nav");
  const open = nav.classList.toggle("open");
  $("#mobile-menu-toggle").setAttribute("aria-expanded", String(open));
});
$$(".nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    $("#main-nav").classList.remove("open");
    $("#mobile-menu-toggle").setAttribute("aria-expanded", "false");
  }),
);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && $("#cart-popup").classList.contains("show"))
    closeCart();
});
$("#year").textContent = new Date().getFullYear();
renderMenu();
updateCart();
