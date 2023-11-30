/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        main: "#0E86FF",
        gray: "#E7E7E7",
        "gray-second": "#868686",
      },
      padding: {
        60: "60px",
        100: "100px",
      },
      fontSize: {
        28: "28px",
        32: "32px",
        64: "64px",
      },
      minWidth: {
        320: "320px",
      },
      width: {
        300: "300px",
        800: "800px",
        384: "384px",
        592: "592px",
      },
      height: {
        300: "300px",
        364: "364px",
        384: "384px",
        400: "400px",
        600: "600px",
        616: "616px",
        766: "766px",
      },
      fontFamily: {
        sans: ["Finlandica"],
      },
      lineHeight: {
        "100%": "100%",
        "110%": "110%",
        "130%": "130%",
      },
      gap: {
        60: "60px",
      },
      gridTemplateColumns: {
        footer: "1fr 40%",
      },
      translate: {
        "110%": "110%",
      },
    },
  },
  plugins: [],
};
