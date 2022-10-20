const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [],
   theme: {
      colors: {
         transparent: "transparent",
         current: "currentColor",
         black: colors.black,
         white: colors.white,
         gray: colors.slate,
         green: colors.emerald,
         purple: colors.violet,
         yellow: colors.amber,
         pink: colors.fuchsia,
         slate: colors.slate,
         gray: colors.gray,
         zinc: colors.zinc,
         neutral: colors.neutral,
         stone: colors.stone,
         red: colors.red,
         orange: colors.orange,
         amber: colors.amber,
         yellow: colors.yellow,
         lime: colors.lime,
         green: colors.green,
         emerald: colors.emerald,
         teal: colors.teal,
         cyan: colors.cyan,
         sky: colors.sky,
         blue: colors.blue,
         indigo: colors.indigo,
         violet: colors.violet,
         purple: colors.purple,
         fuchsia: colors.fuchsia,
         pink: colors.pink,
         rose: colors.rose,
      },
      screens: {
         sm: "420px",
         // => @media (min-width: 420px) { ... }

         md: "640px",
         // => @media (min-width: 768px) { ... }

         lg: "768px",
         // => @media (min-width: 1024px) { ... }

         xl: "1024px",
         // => @media (min-width: 1280px) { ... }

         "2xl": "1280px",
         // => @media (min-width: 1536px) { ... }
      },

      extend: {},
   },
   plugins: [],
};
