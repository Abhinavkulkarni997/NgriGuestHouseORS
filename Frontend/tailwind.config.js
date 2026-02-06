/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      animation:{
        'in':'in 0.2s ease-in-out',
      },
      keyframes:{
        'in':{
          '0%':{opacity:0,transform:'translateY(-10px)'},
          '100%':{opacity:1,transform:'translateY(0)'},
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100%",
            color: "#1f2937", // Gray-800
            lineHeight: "1.7",

            h1: { fontSize: "2.25rem", fontWeight: "700", lineHeight: "1.2" },
            h2: { fontSize: "1.875rem", fontWeight: "600", lineHeight: "1.3" },
            h3: { fontSize: "1.5rem", fontWeight: "600", lineHeight: "1.3" },
            h4: { fontSize: "1.25rem", fontWeight: "600" },
            h5: { fontSize: "1.125rem", fontWeight: "600" },
            h6: { fontSize: "1rem", fontWeight: "600" },

            p: { fontSize: "1rem", lineHeight: "1.7" },
            a: {
              color: "#2563eb",
              fontWeight: "500",
              textDecoration: "none",
            },
            strong: { fontWeight: "600" },
            li: { marginTop: "0.25em", marginBottom: "0.25em" },
          },
        },
      },
     colors: {
      primary: {
        DEFAULT: "#2563eb",
        dark: "#1e40af",
        light: "#dbeafe",
      },
      success: "#10b981",
      warning: "#f59e0b",
      error: "#ef4444",
      info: "#0ea5e9",
    },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
