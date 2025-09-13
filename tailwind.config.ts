import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#fffaeb",
          DEFAULT: "#c5701b"
        },
        accent: {
          light: "#dbfce7",
          dark: "#2b6d30"
        },
        neutral: {
          light: "#364153",
          dark: "#101828"
        },
        whatsApp: {
          DEFAULT: "#08ca5a"
        },
        bg: {
          DEFAULT: "#f9fafb",
          bright: "#ffffff"
        }
      },
    },
  },
  plugins: [],
};

export default config;
