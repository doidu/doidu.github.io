/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: ["./src/*.{html,js}"],
  },
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("group-hover", ":merge(.group):hover &");
      addVariant("group-active", ":merge(.group):active &");
    }),
  ],
};
