<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Café Ordering</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="bootstrap.css">
</head>
<body>

    <header>
        <h1>Welcome to Our Café</h1>
        <p>(This is just an order Menu)</p>
        <div id="cart-container">
            <button id="cart-button">Cart (<span id="cart-count">0</span>)</button>
        </div>
    </header>

       <div class="container py-5">

        <section id="about" class="mb-5">
            <div class="bg-white p-4 rounded shadow-sm">
              <h2 class="text-secondary">Welcome to Our Café</h2>
              <p class="lead">
                At our cozy café, we believe in serving more than just drinks — we offer moments of comfort, joy, and community.
                Whether you're in the mood for a creamy milkshake, a bold espresso, or a refreshing smoothie, we have something special just for you.
                Come in, relax, and enjoy your favorite flavors in a warm and friendly atmosphere.
              </p>
            </div>
          </section>
        </div>

          <div class="container py-5">
        <h2 id="menu-title" class="text-white bg-primary p-3 rounded">
          Menu
        </h2>
      
      
        <section id="menu" class="bg-white border p-4 rounded shadow-sm mt-2 ">

          <div class="menu-group">
            <h3 class="menu-toggle text-primary">Milk Shakes</h3>
            <div id="milk-shakes" class="menu-category hidden">
            </div>
          </div>
      
          <div class="menu-group">
            <h3 class="menu-toggle text-success">Coffee</h3>
            <div id="coffee" class="menu-category hidden">
            </div>
          </div>
      
          <div class="menu-group">
            <h3 class="menu-toggle text-warning">Tea</h3>
            <div id="tea" class="menu-category hidden">
            </div>
          </div>
      
          <div class="menu-group">
            <h3 class="menu-toggle text-danger">Smoothies</h3>
            <div id="smoothies" class="menu-category hidden">
            </div>
          </div>
      
          <div class="menu-group">
            <h3 class="menu-toggle text-info">Frappe</h3>
            <div id="frappe" class="menu-category hidden">
            </div>
          </div>
      
        </section>
      
      </div>

    <footer>
    <div class="container text-center">
      <p class="mb-1">&copy; 2025 Cozy Corner Café. All rights reserved.</p>
      <small>123 Coffee Street, · info@cozycafe.com · (123) 456-7890</small>
    </div>
  </footer>

  <div id="cart-popup">
    <div id="cart-content">
        <h2>Your Cart</h2>
        <ul id="cart-list"></ul>
        <p><strong>Delivery Fee: $<span id="delivery-fee">0</span></strong></p>
        <p><strong>Total Price: $<span id="total-price">0</span></strong></p>
        <button id="close-cart">Close</button>
        <button id="place-order" disabled>Place Order</button>
    </div>
</div>

<script src="script.js"></script>
<script src="bootstrap.js"></script>



</body>

</html>