import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#1789FC",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        // ring: {
        //   'from': { borderColor: '#f2c94c' },
        //   // '50%': { borderColor: '#f2c94c' },
        //   'to': {borderColor: '#2f80ed'},
        // }
        switch1: {
          "0%": {
            opacity: "0"
          },
          "15%": {
            opacity: '1'
          },
          "30%": {
            opacity: '0'
          }
        },
        switch2: {
          "30%": {
            opacity: '0'
          },
          "45%": {
            opacity: '1'
          },
          "60%": {
            opacity: '0'
          }
        },
        switch3: {
          "60%": {
            opacity: '0'
          },
          "80%": {
            opacity: '1'
          },
          "100%": {
            opacity: '0'
          }
        },
        reveal: {
          "0%": {
            top: '-100%'
          },
          "50%": {
            top: '3.2rem'
          },
          "100%": {
            top: '6.4rem'
          }
        }
      },
      animation: {
        ring1: 'ring 3s steps(3, end) infinite',
        switch1: 'switch1 5s ease-in-out infinite',
        switch2: 'switch2 5s ease-in-out infinite',
        switch3: 'switch3 5s ease-in-out infinite',
        reveal: 'reveal 0.3s ease-in-out'
      },
      transitionProperty: {
        'width': 'width',
      }
    },
  },
  plugins: [],
};
export default config;
