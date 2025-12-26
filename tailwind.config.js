/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // 👈 IMPORTANT
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust to your paths
  ],
  theme: {
    extend: {
            lightCard: "#ffffff",
      darkCard: "#0f001a",

    },
  },
 plugins: [require("@tailwindcss/line-clamp")]
}
