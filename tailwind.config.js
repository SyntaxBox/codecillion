/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        card: "4 / 3",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#D9F0F4",
          100: "#DCE8EF",
          200: "#E0E1EA",
          300: "#E4D9E5",
          400: "#21C1EA",
          500: "#0097B6",
          600: "#0085A7",
          700: "#007495",
          800: "#006283",
          900: "#00475B",
          950: "#00475B",
          op1: "#0085A75C",
          op2: "#0085A74b",
          op3: "#0085A720",
        },
        "primary-alt": {
          50: "#D9F5F2",
          100: "#D3F2EF",
          200: "#CCEFF0",
          300: "#C5ECED",
          400: "#BFEBEA",
          500: "#00eedc",
          600: "#00B8AA",
          700: "#009E94",
          800: "#00827E",
          900: "#006764",
          950: "#01423E",
          op1: "#00B8AA5C",
        },
      },
    },
  },
  plugins: [],
};
