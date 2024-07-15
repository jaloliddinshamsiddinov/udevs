/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1B5BF7",
        secondary: "#F4F7FF",
        dark: "#18191f",
        lightDark: "#464359",
        bgDark: "#e0e8ff",
        Frontend: "#c6d6ff",
        Backend: "#bddaed",
        Devops: "#a8bfff",
        Testing: "#e1e9fe",
        UX_UI: "#ced6ee",
        Infrastructure: "#d1dde8",
        Mobile: "#dbe5ff",
      },
      fontFamily: {
        monrope: `Manrope, sans-serif`,
      },
      backgroundImage: {
        heroBg: "url('assets/bg.png')",
        steapsDot: "url('assets/steaps/steap_dot.svg')",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1140px",
    },
  },
  plugins: [],
};
