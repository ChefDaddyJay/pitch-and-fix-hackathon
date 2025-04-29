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
