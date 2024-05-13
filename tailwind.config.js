/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blueColour: "#0A0E27",
        yellowColour: "#FFA820",
        greenColour: "#35A162",
        orangeColour: "#FF6C1B",
        redColour: "#EB5757",
        pinkColour: "#F5AFCB",
        textColour: "#000000",
        greyColour: "#EEEEEE",
        // textColor: "#4E545F",
      },

      boxShadow: {
        panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
      },
    },
  },
  plugins: [],
};
