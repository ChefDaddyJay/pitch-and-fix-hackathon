## First glance

- Images not don't appears correctly (except logo)
- Navigation link pages don't exist
  - /pages/cart and /pages/product-detail do exist, but don't appear to be linked to anywhere
  - links at the bottom also lead nowhere
- Cart appears to function partially
  - "Add to Cart" adds items to the drop-down in the top right
  - drop-down layout is mis-aligned
  - 'x' buttons remove items from the drop-down
  - total is not calculated/NaN
  - 'Checkout' button doesn't function
- Newlsletter form doesn't do anything, and the placeholder is obviously wrong
- Footer "Follow us" links are misaligned
- Layout is entirely non-responsive, breaks on small screen size

## Commit 1 - "Product and Category images" - 04/24/25

- Found images for each of the featured products and categories
  - Note: none of the images are mine, and are for demonstration only
- Added correct `src` to product 4 card in /index.html

## Commit 2 - "Dummy pages" - 04/28/25

- Reduced image file sizes
- Added responsive tag to /index.html
- Created dummy pages for all links on the home page

## Commit 3 - "Initial migration to NextJS" - 04/29/25

- Installed and configured NextJS
- Migrated desktop view from original to NextJS
  - created supporting UI components
  - translated base styling to Tailwind CSS
  - created directories and dummy pages for all links

## Commit 4 - "Add to Cart functionality" - 04/30/25

- Basic shopping cart framework
  - Products can be added to cart and are dynamically displayed in the dropdown
  - Remove function still needs to be implemented
  - Cart dropdown needs to be styled
  - Cart checkout button redirects to checkout page, which is still just a placeholder

## Commit 5 - "Cart dropdown styles and controls" - 04/30/25

- Cart dropdown is styled, including amounts, prices, and controls for each product
- Cart total is calculated and displayed at the bottom of the dropdown and as part of the icon
- Users can increase or decrease the amount of each item or remove items completely via controls
- Users can dismiss the dropdown by clicking outside of it
- Cart dropdown is full Reactive and contents persist across pages

## Commit 6 - "Checkout Page" - 05/01/25

- Implemented the Checkout page
  - Data is collected from the cart dynamically
  - No payment methods are implemented
    - Payment method accordions are for demonstration
    - "Complete Order" button clears the cart and redirects to the home page
  - Shipping and sales tax are calculated with placeholder values

## Commit 7 - "Products Page" - 05/02/25

- Added hero image and fixed styling
- Fixed Navbar to reflect active page
- Created SampleProducts.json to mimic database calls
- Fixed product cards
  - Cards are now more responsive
  - Cards display stars for the rating, but just for show. The only rating data each product has is the number of ratings.
- Implemented Products page
  - Products are displayed in a grid on the right
  - Search and filter controls are on the left
  - Search and filters both use searchParams, so users can link baack to their search

## Commit 8 - "Categories Page" - 05/02/25

- Implemented Categories page
  - Products are displayed in sections that each scroll horizontally
  - Implemented `fetchProductsByCategory` in `/lib/data.ts`

## Commit 9 - "About Us Page" - 05/02/25

- Implemented About Us page
  - Just a simple design with lorem ipsum filler

## Commit 10 - "Contact Us Page" - 05/02/25

- Created Contact Us Page
  - No actual contact function is implemented.

## Commit 11 - "Footer links and FAQ Page" - 05/02/25

- Updated footer links
  - New Arrivals now leads to `/products?tag=New`
  - Deals now leads to `/products?tag=Sale`
- Implemented FAQ Page
  - Questions and answers can be added to the `questions` array and are displayed in Accordions

## Commit 12 - "Blog Page" - 05/02/25

- Implemented Blog Page
  - Posts are collected from a mock database call

## Commit 13 - "Returns Page" - 05/02/25

- Implemented Refunds & Returns Page
  - Originally "Shipping & Returns" but shipping is handled on the checkout page and shipment tracking would be handled externally.
  - Similar to Contact Us, no actual communication is implemented

## Commit 14 - "Terms Page" - 05/02/25

- Implemented the Terms & Conditions Page
  - Similar to FAQ Page, policies are displayed in Accordions

## Commmit 15 - "Careers Page" - 05/02/25

- Implemented Careers Page
  - Hero image doesn't show up properly, but I think that's an issue with TurboPack that will likely disappear in a production environment
  - Drag-and-drop option for uploading resume is handled with `react-dropzone`
  - No actual upload/communication is implemented
  - "Apply Now" redirects to homepage

## Bug Notes

[x] Product cards should display a rating, not just the number of ratings
[] Home page is displaying all the sample products. This needs to be limited to 4 or put in a carousel
