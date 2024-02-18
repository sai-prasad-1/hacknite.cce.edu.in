/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#52D3D8",
        secondary: "white",
        tertiary: "#030402",
        quarternary: "rgba(255, 255, 255, 0.2)",
      },
      fontFamily: {
        primary: ["climate-crisis-main"],
        secondary: ["climate-crisis-numeric"],
      },
    },
  },
  plugins: [require("daisyui")],
};
