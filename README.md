# Fakih Cafe Website — Modern Refresh

A bright, responsive refresh of the Fakih Cafe website. The visual direction uses a light cream canvas, fresh mint/green surfaces, sunny yellow accents, coral highlights, editorial typography, rounded product cards, and a cleaner menu grid.

## Pages
- `index.html` — Home, menu, visit information, cart and WhatsApp ordering.
- `about.html` — About page and café story.

## Preserved functionality
- All 30 menu products, prices, categories and local image paths.
- Menu category filters. The full menu is grouped in a predictable order: Coffee, Latte, Frappe, Milk Shakes, Smoothies, Tea; products are alphabetized within each category.
- Add-to-cart, quantity updates, delivery fee and total calculation.
- WhatsApp ordering to `+961 71 232 811`.
- Best-effort `sales.php` POST integration; WhatsApp ordering remains available if the endpoint is missing or unavailable.

## Add your existing files
Copy your original `images/` directory and `sales.php` into this project folder, beside `index.html`. The HTML and CSS continue to reference the original image filenames. If an individual menu image is missing, the product card uses a generic online fallback image.

## Run locally
Open `index.html` in a browser, or serve the folder with a local PHP/web server if you want to test `sales.php`.

## Notes
- The wallpaper treatment was removed from the page background because it made the previous version feel dark and visually busy. Photography is now used as focused hero/section imagery.
- Remote Google Fonts and Unsplash fallback imagery require an internet connection. Local images in `images/` are preferred when present.
