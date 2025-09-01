/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        sans: ['Poppins', 'sans-serif'], // sets Poppins as default sans font
        poppins: ['Poppins', 'sans-serif'],
        fredoka: ['Fredoka', 'sans-serif'],
        openSans: ['"Open Sans"', 'sans-serif'],
        story: ['"Story Script"', 'cursive'],
        dancing: ['"Dancing Script"', 'cursive'],
        oswald: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#570df8",
          "secondary": "#f000b8",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffe4e6", // 👈 your custom light mode card background
        },
      },
      {
        dark: {
          "primary": "#1e40af",
          "secondary": "#9333ea",
          "accent": "#22d3ee",
          "neutral": "#191d24",
          "base-100": "#1f2937", // default dark bg
        },
      },
    ],
  },
};
