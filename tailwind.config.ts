import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        neon: {
          pink: "#FF00FF",
          cyan: "#00FFFF",
          magenta: "#FF0080"
        }
      },
      animation: {
        'spin-and-stop': 'spin 1s ease-out forwards',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blob': 'blob 7s infinite'
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)'
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)'
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)'
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)'
          }
        }
      },
      fontFamily: {
        sans: ['var(--font-ubuntu)'],
        pacifico: ['var(--font-pacifico)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
