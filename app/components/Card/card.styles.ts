import { cva } from "class-variance-authority";

const cardVariants = cva("items-center", {
  variants: {
    variant: {
      students: "bg-[#F0F9FF]",
      courses: "bg-[#FEF6FB] ",
      payments: "bg-[#FEFBEC]",
      users: "bg-[#ECFEF0] ",
    },
    ize: {
      sm: "px-3 py-2 text-2xs gap-2",
      md: "px-5 py-2.5",
      lg: "px-6 py-4 text-base gap-4",
      expand: "py-2.5 w-full",
      "square-sm": "p-2 text-2xs gap-2",
      "square-md": "p-2.5",
      "square-lg": "p-4 text-base gap-4",
    },
    defaultVariants: {
      variant: "students",
      size: "square-lg",
    },
  },
});

export default cardVariants;
