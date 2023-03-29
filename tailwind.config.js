/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "#29BF12",
        "secondary-green": "#8DDF36",
        "custom-brown": "#AC5900",
        "custom-yellow": "#FFC014",
		"custom-orange": "#FF6600",
      },
    },
  },
  plugins: [],
};
