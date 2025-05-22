
import { type Config } from "tailwindcss";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Cormorant", "serif"],
        sans: ["Rubik", "sans-serif"],
      },
      colors: {
        garden: {
          bg: "#FEFAE0",
          green: "#606C38", 
          accent: "#DDA15E",
          muted: "#e0dcd3",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
