/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    letterSpacing: {
      1: "4.75px",
      2: "2.7px",
      3: "2.35px",
    },
    extend: {
      colors: {
        dark: "hsl(230, 35%, 7%)",
        light: "hsl(231, 77%, 90%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontSize: {
        900: "9.375rem",
        800: "6.25rem",
        700: "3.5rem",
        600: "2rem",
        500: "1.75rem",
        400: "1.125rem",
        300: "1rem",
        200: "0.875rem",
      },
      fontFamily: {
        serif: ["Bellefair", "serif"],
        sansCond: ["Barlow Condensed", "sans-serif"],
        sans: ["Barlow", "sans-serif"],
      },
      backgroundImage: {
        homeDesktop: "url('./assets/home/background-home-desktop.jpg')",
        homeTablet: "url('./assets/home/background-home-tablet.jpg')",
        homeMobile: "url('./assets/home/background-home-mobile.jpg')",
        destinationDesktop:
          "url('./assets/destination/background-destination-desktop.jpg')",
        destinationTablet:
          "url('./assets/destination/background-destination-tablet.jpg')",
        destinationMobile:
          "url('./assets/destination/background-destination-mobile.jpg')",
        crewDesktop: "url('./assets/crew/background-crew-desktop.jpg')",
        crewTablet: "url('./assets/crew/background-crew-tablet.jpg')",
        crewMobile: "url('./assets/crew/background-crew-mobile.jpg')",
        technologyDesktop:
          "url('./assets/technology/background-technology-desktop.jpg')",
        technologyTablet:
          "url('./assets/technology/background-technology-tablet.jpg')",
        technologyMobile:
          "url('./assets/technology/background-technology-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
