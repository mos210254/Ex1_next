/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ninja-beige": "#F5F2EE",
        "ninja-dark": "#262626",
        "ninja-red": "#E84D4D",
        "ninja-tan": "#E5DED5",
        "ninja-brown": "#8B7355",
      },
      keyframes: {
        "arrow-loop": {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "45%": { transform: "translateX(8px)", opacity: "0" },
          "55%": { transform: "translateX(-8px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "sans-serif"],
      },
      animation: {
        "arrow-loop": "arrow-loop .5s ease-in-out",
      },
    },
  },
}
