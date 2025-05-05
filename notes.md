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
- Newsletter form doesn't do anything, and the placeholder is obviously wrong
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

## Commit 16 - "Partners Page" - 05/02/25

- Implemented Partners Page
  - Partnership programs are displayed dynamically and transition to show a sign in form for the give partner
  - No authentication is implemented - Sign In button redirects to home
  - Ideally, there would be a different sign in form for each type of partner and would redirect to different parts of the site

## Commit 17 - "Home Page refresh" - 05/02/25

- Fixed bug causing home page to display all products
  - Limited display to first four products being fetched
  - Ideally, "featured" items would be marked in the database to prevent unnecessary data transfer
- Items displayed on Categories page now have unique keys
- Changed styling to be more consistent with the rest of the site
  - Change `CardGrid`s into `PageSection`s
  - Category links now lead to Products page with appropriate search params
- Redsigned newsletter subscription form with more consistent styling
  - Redirects to home, no actual subscription service
- Added `placeholder` optional property to `FormField`

## Commit 18 - "Categories Page" - 05/03/25

- Fixed styling on Categories page
  - Added padding to outter element of each category
  - Moved overflow property to the inner element
- Added strict sizings (min and max width) to `ProductCard`
  - Each item is meant to be the same size to allow for cleaner positioning

## Commit 19 - "Product Details Page" - 05/03/25

- Implemented Product Details Page
  - `ProductCard`s are now `Link`s to dynamically routed details pages
  - Ideally, reviews would be retrieved from the database, but for now samples are given
  - Each page includes product information and reviews
- `/ui/Product.tsx` no contains
  - `ProductCard` - a block display of Product information
  - `ProductRating` - displays a dynamic number of stars, the rating, and the number of ratings
  - `ProductReview` - displays an individual review of the product including the reviewer's name, date, and rating
- Updated all anchor tags to `Link`s for smoother navigation with Next
- Fixed Cart checkout button to use `redirect`
- Removed `CardGrid.tsx` because it is no longer being used

# Commit 20 - "Responsive Home Page" - 05/04/25

- Added `flex-wrap` to the featured products and categories sections of the home page
- Added `min-w-min` to `SubmitButton` to prevent shrinkage on smaller screens
- Refactored NavBar
  - All `Dropdown` components are now available through `/ui/Dropdown`
  - Cart is now a `Dropdown`
  - Under 768px screen width `NavLinks` can be found in a `Dropdown` from the site logo on the left
- On smaller screens:
  - Hero section becomes shorter and the greeting stretches to eventually take up the whole width of the screen
  - Items displayed on the page shift into fewer columns as the size goes down thanks to `flex-wrap`
  - Newsletter form shifts the button under the text input
  - Footer shifts with other items on the page
    - `FooterColumn` has been merged into `/ui/Footer`
- Updated `lib/data.ts` to return `Product`s

# Commit 21 - "More responsive updates and final touches" - 05/05/25

- Responsive design fixes throughout the site. On smaller screens:
  - Checkout page shifts to one column
  - Products page shifts search and filters to the top (single column)
    - Filters are now inside an `Accordion` to save space on smaller screens
  - `ProductCard` is hidden on product details pages and replaced by an image in the main column
    - On very small screens, the product name, price and rating shift under this picture
  - Catgeories page shifts to single column
  - Contact Us page moves contact information to the top and the form to the bottom ina single column
    - Also at 768px the First Name and Last Name fields shift to a single column
  - Returns page flexes similarly to the Contact Us page, but places the contact information at the bottom
  - Blog page stop the text from wrapping the image
  - Careers page form shifts first and last names into a single column
  - Partners page transitions programs list to the bottom instead of the left
- Fixed the Hero section of the Partners page
- Follow Us links in Footer now lead to their respective sites, opening in a new tab

# Commit 22 - "Last minute fixes" - 05/05/25

- Added promo code feature to Checkout page
  - Currently only accepts "DevSlopes2025" and gives a $29.99 discount, before tax
- Fleshed out product details pages
  - Now includes a set of images under the title (ideally for different angles, though for now it just shows the same image)
  - Color Options are now displayed, though they have no effect (ideally these would change the images to display a version of the product in the given color)
  - Now includes a section for technical information, currently hardcoded (ideally this would be fetched from the database along with the other product information)
    - This section shifts from a table to a single column on smaller screens
  - Refund/Return Policy and Warranty are displayed in `Accordion`s
- Split `UtilComponents` into `Accordion`, `LayoutComponents`, and `FormComponents`

## Bug Notes

[x] Product cards should display a rating, not just the number of ratings
[x] Home page is displaying all the sample products. This needs to be limited to 4 or put in a carousel
