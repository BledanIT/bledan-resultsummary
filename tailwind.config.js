/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          redDiv: 'hsl(0, 100%, 67%)',
          yellowDiv: 'hsl(39, 100%, 56%)',
          greenDiv: 'hsl(166, 100%, 37%)',
          blueDiv: 'hsl(234, 85%, 45%)',
          cardGradient1: 'hsl(252, 100%, 67%)',
          cardGradient2: 'hsl(241, 81%, 54%)',
          circleGradient1: 'hsla(256, 72%, 46%, 1)',
          circleGradient2: 'hsla(241, 72%, 46%, 0)',
          pureWhite: 'hsl(0, 0%, 100%)',
          paleBlue: 'hsl(221, 100%, 96%)',
          lavender: 'hsl(241, 100%, 89%)',
          darkGreyBlue: 'hsl(224, 30%, 27%)',
        },
        fontFamily: {
          hanken: ['Hanken Grotesk', 'sans-serif'],
        },
        content: {
          iconMemory: "url('./assets/images/icon-memory.svg')",
          iconReaction: "url('./assets/images/icon-reaction.svg')",
          iconVerbal: "url('./assets/images/icon-verbal.svg')",
          iconVisual: "url('./assets/images/icon-visual.svg')",
        },
    },
  },
  plugins: [],
}

