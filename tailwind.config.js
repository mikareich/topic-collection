module.exports = {
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
      // Prose
      "prose-red",
      "prose-yellow",
      "prose-green",
      "prose-blue",
      "prose-indigo",
      "prose-purple",
      "prose-pink",
      // Text
      "text-red-500",
      "text-yellow-500",
      "text-green-500",
      "text-blue-500",
      "text-indigo-500",
      "text-purple-500",
      "text-pink-500",
      // Backgrounds
      "bg-red-500",
      "bg-yellow-500",
      "bg-green-500",
      "bg-blue-500",
      "bg-indigo-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-red-100",
      "bg-yellow-100",
      "bg-green-100",
      "bg-blue-100",
      "bg-indigo-100",
      "bg-purple-100",
      "bg-pink-100",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  // eslint-disable-next-line global-require
  plugins: [require("@tailwindcss/typography")],
};
