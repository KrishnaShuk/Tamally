/** @type {import('tailwindcss').Config} */
module.exports = {
  // This enables dark mode based on a parent class, which Next.js themes typically use.
  darkMode: ["class"],
  
  // This tells Tailwind where to look for class names to generate the necessary CSS.
  // It's the most important part.
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  // This is where all your customizations go.
  theme: {
    extend: {
      colors: {
        // Here is your custom oklch color, ready to be used.
        'brand-accent': 'oklch(0.577 0.245 27.325)',
      },
      // You can also extend other properties like fonts, animations, etc. here.
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  
  // This is where you can add official Tailwind plugins.
  plugins: [],
};