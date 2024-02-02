/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "2rem",
      },
    },
    extend: {
      colors: {
        AlmostWhite: "hsl(0, 0%, 98%)",
        MediumGray: "hsl(0, 0%, 41%)",
        AlmostBlack: "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
};
