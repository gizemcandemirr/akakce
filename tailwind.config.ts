import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        akBlue: "#247ec5",
        akYellow: "#e59f36",
        akGreen:"#006400"
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
} satisfies Config;
