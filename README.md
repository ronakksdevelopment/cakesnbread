# Cakes and Breads - Ordering App (PWA)

Version 2.5 - Production Ready

A mobile-first Progressive Web App for Cakes and Breads, Agartala's cakes and desserts shop. Customers browse the real catalog, pick items with size and quantity, add to cart, add a tip, auto-detect or enter their delivery location, review an order summary and send the order directly to the shop on WhatsApp.

## What's new in 2.5

- **Fixed drag-to-scroll for every device**: a mouse click-and-drag anywhere on the main page did nothing (it started a text/element selection instead, which is normal browser behavior), while it appeared to "work" on the bottom nav and inside popups only because there was nothing selectable under the cursor there. Added a proper click-and-drag scroller that detects mouse-capable devices once (rather than per-touch), grabs whichever scroll area the drag started on (the page itself, a sheet's own content, or a horizontal rail), and completely leaves real touchscreens, tablets, and trackpad swipes alone since native scrolling already works correctly there - it now behaves consistently across phone, tablet, and desktop instead of only patching the desktop-mouse case.
- **Fixed price/quantity overlap on product cards**: once an item was added to the cart, the inline quantity stepper could overlap or squeeze the price text on the compact Home grid cards. The price + stepper row now wraps the stepper onto its own full-width line under the price whenever both can't comfortably fit, instead of the two colliding.
- **Rebranded to "Cakes and Breads"** across the app name, splash screen, page title, meta tags, footer, and WhatsApp messages.
- **New logo** applied across every icon size (including maskable icons with proper safe-zone padding) and the splash/More screen artwork.

## What's new in 2.1

- **Fixed the real "scroll stops working" bug**: a rapid double-tap on a product card (or the +1 stepper button) could call the sheet-open logic twice before the user's single close-tap fired, leaving the background scroll lock stuck on permanently - taps kept working (fixed-position elements stay clickable) but the page could never scroll again. The lock now tracks open sheets by ID instead of a raw counter, so opening the same sheet twice is a no-op. Screen navigation and tab refocus also now force-clear the lock as a safety net.
- **Service worker now actually delivers updates**: it previously cached every JS/CSS/HTML file "cache-first" under a fixed name, so once installed, a phone would keep serving the *old* files forever even after a new version was uploaded. CSS/JS/HTML now use a stale-while-revalidate strategy and the cache name is versioned, so fixes reach everyone on their next load instead of getting stuck.
- **Fixed Cart/Menu/More/Home not matching on tablet & desktop**: the floating "View Cart" bar was hardcoded to a fixed width and never widened past phone size while everything else did, and each screen's side padding changed at a different breakpoint than Home's. Every screen now reads the same shared width and padding values, so they resize together and stay visually consistent at every screen size, including a 2/3-column layout for the Cart and More lists on wider screens instead of a single stretched column.
- **Fixed a duplicate-element bug** in the cart's sticky checkout bar: tapping a tip amount or typing in the custom tip field could append a second (or third...) invisible copy of the checkout bar on top of the first instead of replacing it. It's now always replaced cleanly.

## What's new in 2.0

- **Fixed the icon "yellow border" bug**: the app icons used a padding color that did not exactly match the logo's own yellow, creating a visible ring on Android's round icon crop. All icons were regenerated using the logo's exact fill color, so the edge is now seamless.
- **Smaller, cleaner logo everywhere**: the boot/splash screen logo, the install-prompt icon, and the More screen logo were all oversized. All three are now sized to fit their containers properly with no cropping or distortion.
- **Inline quantity stepper on product cards**: tapping ADD once (for single-size items, or after choosing a size for multi-size items) turns the button into a live `- qty +` control right on the card. Minus at quantity 1 removes the item from the cart, matching the same behavior already used on the Cart screen.
- **Fixed the sheet scrolling bug**: opening a product, location, or contact sheet used to let the screen underneath scroll along with it. The background is now locked while any sheet is open, so only the sheet itself scrolls, and the page's scroll position is restored correctly when it closes.
- **Fixed the search bar overflow bug**: the search input could stretch wider than the screen and cause horizontal scrolling. Fixed the underlying flexbox sizing issue and added a safety net so the app can never scroll sideways.
- **"Added to cart" toast repositioned**: it no longer overlaps the floating cart bar.
- **Special Offers cards** are now evenly matched in text length, and the **Google review highlights** were shortened to fit on one line each.
- **"Rate us on Google"** now opens the shop's Google Maps business card directly (via its listing ID) instead of a generic share link, so "Write a review" is one tap away.
- **Home screen product cards**: added spacing between the price and the Add button so they no longer sit too close together (menu screen rows were left as they were, since they already had enough room).
- **Full Custom Cake Enquiry form**: occasion, theme/design description, approximate size or servings, preferred date and time, an optional reference photo upload with preview, and a special instructions field, all combined into one pre-filled WhatsApp message.
- **Distance-based delivery charge for Cash on Delivery**: when COD is selected and the customer's location has been detected, the app calculates the straight-line distance from the store to the delivery address and adds a charge of ₹20 per kilometer, shown as its own line in the bill and included in the WhatsApp order message.
- General cleanup pass: removed all em dashes from the codebase and user-facing text.

## Features

- Splash screen with brand animation
- Home screen with category browsing, bestsellers, special offers and promos
- Full menu with category filter chips
- Live search across all products
- Inline add / quantity stepper on every product card and row
- Product detail sheet with size selection and quantity stepper (for choosing how many to add)
- Cart with quantity editing, order notes and tip for bakers
- Automatic free delivery above ₹999
- Distance-based Cash on Delivery charge (₹20/km from the store)
- Auto-detect delivery location (GPS + reverse geocoding) or manual entry
- Order summary screen with customer details form
- Google Maps link to the store location
- Custom Cake Enquiry form with reference photo upload
- Orders sent as a pre-filled WhatsApp message to the shop, including a Google Maps pin if location was auto-detected
- Installable as a real app (Add to Home Screen / Install prompt) via PWA manifest and service worker
- Works offline for previously visited screens
- Contact sheet with call, WhatsApp, Instagram, Facebook and directions

## How to Host on GitHub Pages

1. Create a new GitHub repository, for example `cakes-and-bread-app`.
2. Upload all the files in this folder to the root of that repository (keep the folder structure: `css/`, `js/`, `assets/` etc).
3. Go to the repository **Settings > Pages**.
4. Under **Source**, choose the `main` branch and `/ (root)` folder, then save.
5. GitHub will give you a live URL such as `https://yourusername.github.io/cakes-and-bread-app/`.
6. Open that URL on a phone. You should see an **Install** banner appear, or you can install manually from the browser menu ("Add to Home Screen" / "Install app").

The app works fully as a static site, no backend or build step is required. Location auto-detect requires the site to be served over **HTTPS** (GitHub Pages is HTTPS by default) since browsers block Geolocation on plain HTTP.

## Updating Products

Open `js/data.js` and edit the `PRODUCTS` and `CATEGORIES` arrays. Each product supports:

- `name`, `desc`, `category`, `rating`, `badge` (optional)
- `icon` - a Font Awesome icon class used as a placeholder image
- `sizes` - an array of `{ label, price }` options shown to the customer

## Adding Real Photos

Currently each product and category uses a Font Awesome icon as a placeholder. To add real photos:

1. Add your images to `assets/images/`.
2. In `js/app.js`, replace the icon `<i>` tags inside `productCardHtml`, `productRowHtml` and `renderProductSheetBody` with an `<img>` tag pointing to your image, for example: `<img src="assets/images/chocolate-truffle.jpg" alt="${p.name}">`.
3. Add a matching `image` field to each product in `js/data.js` for convenience.

## COD Distance Charge

The rate is set in `js/app.js` as `COD_RATE_PER_KM` (currently 20). It only applies when "Cash on Delivery" is selected as the payment method and the customer's coordinates are known (from auto-detecting their location). The distance is calculated as a straight-line (great-circle) distance from the store's coordinates, not actual road distance, since that keeps the app fully client-side with no mapping API costs. If road-distance accuracy is needed later, this can be swapped for a Distance Matrix API call in the `distanceKm()` function.

## WhatsApp Numbers

The two shop numbers are configured in `js/data.js` under `WHATSAPP_NUMBERS`. The primary number used for the order button is +91 97740 20103. Both numbers are shown in the Contact sheet and the More screen, and the customer can pick which number to use for the order in the order summary screen.

## Store Info & Links

Store name, address, coordinates, WhatsApp numbers, Instagram/Facebook links, the Google Maps listing link, home-screen offers, and review highlights are all configured near the bottom of `js/data.js`. Update these there if any of the shop's real details ever change.

## Notes

- Product data reflects the shop's actual printed catalog collections and prices at the time this build was made; double check prices before going live if the catalog has since changed.
- Geolocation auto-detect uses the free OpenStreetMap Nominatim reverse-geocoding API; it is rate-limited for heavy traffic. For a high-traffic production deployment, consider swapping in a paid geocoding provider (Google Maps Geocoding API, etc.) in `js/app.js`'s `reverseGeocode()` function.
- The custom cake enquiry form's photo upload cannot attach the file to WhatsApp automatically (this is a limitation of `wa.me` links, not the app); the customer is shown their selected photo and asked to attach the same one manually once WhatsApp opens.
