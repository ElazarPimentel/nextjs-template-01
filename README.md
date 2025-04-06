# Elazar's Next.js Template

A clean, responsive, accessible, and theme-adaptable Next.js template.

## Features

- 🌗 Light and dark theme with system preference detection
- 📱 Fully responsive design for mobile, tablet, and desktop
- ♿ Accessibility features including skip link and semantic HTML
- 🧩 Reusable Container component for consistent styling
- 🔍 Clean, semantic HTML structure
- 🚀 Built with Next.js and TypeScript

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Template Structure

- `app/layout.tsx` - The root layout with theme initialization
- `app/page.tsx` - The main page template
- `app/globals.css` - Global styles with CSS variables for theming
- `app/components/` - Reusable components:
  - `Container.tsx` - A flexible container component
  - `Header.tsx` - The page header
  - `Footer.tsx` - The page footer
  - `ThemeToggle.tsx` - Theme switching functionality

## Customization

You can start customizing by editing the variables in `app/globals.css` for colors and theming.

## License

Feel free to use and modify for any project!

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
