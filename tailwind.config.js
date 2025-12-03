/** @type {import('tailwindcss').Config} */
export const content = ["./app/**/*.{html,js,tsx,jsx}"];
export const theme = {
  extend: {
    colors: {
      background: "#F9FAFB",
      block: "#FFFFFF",
      shadow: "#000000",
      colors: {
        primary: "#000000",
        secondary: "#9C9C9C",
        button: "#FFFFFF",
      },
    },

    spacing: {
      128: "32rem",
      144: "36rem",
    },

    borderRadius: {
      xl2: "1rem",
      xl3: "1.5rem",
    },

    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
};
export const plugins = [];
