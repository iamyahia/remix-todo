import type { Config } from "tailwindcss";

import { nextui } from "@nextui-org/react";
import lineClampPlugin from "@tailwindcss/line-clamp";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui(), require("@tailwindcss/line-clamp")],
} satisfies Config;
