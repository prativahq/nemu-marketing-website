/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        current: "currentColor",
        transparent: "transparent",

        black: "#000",
        white: "#fff",

        cardGreen: "#E4F4E7",
        cardBlue: "#DEF2FA",
        cardPink: "#F1E9FA",
        cardPeach: "#FBEDE5",

        emerald: {
          50: "#e6eeef",
          100: "#b2cace",
          200: "#8db0b7",
          300: "#598c96",
          400: "#397581",
          500: "#075362",
          600: "#064c59",
          700: "#053b46",
          800: "#042e36",
          900: "#032329",
        },
        darkCoolGray: {
          50: "#F5F6F7",
          100: "#EBEDEF",
          200: "#CED1D6",
          300: "#B0B5BD",
          400: "#757E8C",
          500: "#3A475B",
          600: "#344052",
          700: "#2C3544",
          800: "#232B37",
          900: "#1C232D",
        },
        coolGray: {
          50: "#F7F8F9",
          100: "#EEF0F3",
          200: "#D5DAE1",
          300: "#BBC3CF",
          400: "#8896AB",
          500: "#556987",
          600: "#4D5F7A",
          700: "#404F65",
          800: "#333F51",
          900: "#2A3342",
        },
        indigo: {
          50: "#F8F6FF",
          100: "#F0EEFF",
          200: "#DAD4FF",
          300: "#C3B9FF",
          400: "#9685FF",
          500: "#6951FF",
          600: "#5F49E6",
          700: "#4F3DBF",
          800: "#3F3199",
          900: "#33287D",
        },
        violet: {
          50: "#FBF7FF",
          100: "#F6EEFE",
          200: "#E9D5FD",
          300: "#DCBBFC",
          400: "#C288F9",
          500: "#A855F7",
          600: "#974DDE",
          700: "#7E40B9",
          800: "#653394",
          900: "#522A79",
        },
        yellow: {
          50: "#FFFAF3",
          100: "#FEF5E7",
          200: "#FDE7C2",
          300: "#FBD89D",
          400: "#F8BB54",
          500: "#F59E0B",
          600: "#DD8E0A",
          700: "#B87708",
          800: "#935F07",
          900: "#784D05",
        },
        red: {
          50: "#FEF7F6",
          100: "#FDEEEC",
          200: "#FBD6D0",
          300: "#F9BDB4",
          400: "#F48B7C",
          500: "#EF5844",
          600: "#D7503D",
          700: "#B34333",
          800: "#8F3529",
          900: "#752C21",
        },
        green: {
          50: "#F4FDF7",
          100: "#EAFAF0",
          200: "#CAF4D9",
          300: "#AAEDC3",
          400: "#6ADF95",
          500: "#2AD167",
          600: "#26BC5E",
          700: "#209D4E",
          800: "#197D3E",
          900: "#156633",
        },
        blue: {
          50: "#F5F9FF",
          100: "#EBF3FE",
          200: "#CEE0FD",
          300: "#B1CDFB",
          400: "#76A8F9",
          500: "#3B82F6",
          600: "#3575DD",
          700: "#2C62B9",
          800: "#234E94",
          900: "#1D4079",
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      fontFamily: {
        body: '"Inter"',
        heading: '"Lora"',
        sans: '"Poppins", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
        mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      },
    },
  },
  plugins: [],
};
