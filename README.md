This is Joshua Tryon's submission for the April 2025 DevSlopes Pitch-and-Fix Hackathon. All images are for display/demonstration purposes only.

# Project Status

The site is as fully functional as it can be at this point without having any backend support. All links lead to valid pages and buttons trigger actions, though that's mostly just redirecting to the home page for now. Products can be added to the cart from various places throughout the site, and cart data persists across pages and sessions. The Products page supports searching and filtering of items by tag, price, and category. Other pages, such as 'About Us', 'FAQ' and 'Careers' have dummy content that would be replaced in production.

All of the data being displayed is for demonstration only. [SampleData](./src/lib/SampleData.json) is a list of products with different combinations of the same names and images, used to fill space in place of an actual database. As a result, a product may be labeled "Laptop Bag" but have a picture of a bluetooth speaker. This isn't a bug, just a lack of data.

All pages are responsive to screen size, shifting to a largely single-column layout as the screen gets smaller.

(See [notes](./notes.md) for detailed commit notes)

# Getting Started

- Clone this repo to your local machine

`git clone git@github.com:ChefDaddyJay/pitch-and-fix-hackathon.git`

- Install dependencies

`npm -i` or `pnpm -1`

- Run the development server

`npm run dev` or `pnpm run dev`

- Navigate to the site

[localhost:300](http://localhost:3000)
