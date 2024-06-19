/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heebo: ["Heebo", "sans-serif"],
      },
      colors: {
        fontPurple: "#5C459B",
        fontPage: "#F5F5F5",
        fontDiv: "#F9F9F9",
        fontButton: "#6E4FC3",
        fontForget: "#FAF5FFBF",
        uncheckedConversation: "#E4DDEB",
        uncheckedText: "#B9B9B9",
        checkConversation: "#9024FF",
        textColor: "#6F6F6F",
        borderSelection: "#6E4FC380",
        valueSelection: "#4514A3",
        gradientPink: "#F6EDFF",
        titleSwire: "#A8A8A8",
        buttonPurple: "#644BA9",
        textGray: "#BFBFBF",
      },
      boxShadow: {
        selection: "0px 4px 15px 0px rgba(0, 0, 0, 0.25)",
        matched: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)",
        div: "10px 10px 10px 0px rgba(0, 0, 0, 0.25)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
