/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "var(--text)",
        backgroundColor: "var(--background)",
        primaryColor: "var(--primary)",
        secondaryColor: "var(--secondary)",
        accentColor: "var(--accent)",
        cardColor: "var(--card)",
        buttonTextColor: "var(--button-text)",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
