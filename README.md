# Cake E-Commerce Website

This project is a simple Cake E-Commerce website built with Next.js and TypeScript. Users can view a selection of cakes, choose a cake, and complete a payment using a QR code.

## Features

- Display a list of cakes with images and prices.
- Select a cake to view its details.
- Make a payment using a QR code.
- Display a confirmation message upon successful payment.

## Project Structure

```
public/
└── images/
    ├── chocolate-cake.jpg
    ├── vanilla-cake.jpg
    ├── strawberry-cake.jpg
    └── qr-code.png
styles/
  global.scss
components/
  Header.tsx
  Footer.tsx
  CakeList.tsx
  CakeDetail.tsx
  PaymentSuccess.tsx
app/
  layout.tsx
  page.tsx
```

## Files and Directories

### public/images
Contains static images used in the project.

### styles/global.scss
Defines global styles for the website.

### components
Modular React components for different parts of the website:

- **Header.tsx**: Displays the website's header.
- **Footer.tsx**: Displays the footer with copyright information.
- **CakeList.tsx**: Shows a list of cakes with an image, name, and price. Users can select a cake from this list.
- **CakeDetail.tsx**: Displays details of the selected cake and provides a QR code for payment.
- **PaymentSuccess.tsx**: Shows a success message after payment and allows users to return to the shop.

### app
Contains the main layout and the homepage:

- **layout.tsx**: Defines the layout of the application.
- **page.tsx**: Implements the main functionality of the homepage.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd CAKE-SHOP-NEXT
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Styling
- The website uses SCSS for styling.
- All styles are defined in `styles/global.scss`.

## Images
Add your cake images and QR code image to the `public/images` folder.

## Deployment

To deploy the application:

1. Build the project:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

Alternatively, you can deploy it on platforms like Vercel, which is optimized for Next.js.

## License
This project is licensed under the MIT License.

## Acknowledgements
Special thanks to the Next.js team for providing a robust framework for building React applications.
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
