import type { Config } from "tailwindcss";

import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui(), require("@tailwindcss/line-clamp")],
} satisfies Config;
