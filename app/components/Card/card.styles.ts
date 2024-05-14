import { cva } from "class-variance-authority";

const cardVariants = cva("items-center", {
  variants: {
    variant: {
      students: "bg-blue-500 text-blue-700",
      courses: "bg-pink-500 text-pink-700",
      payments: "bg-yellow-500 text-yellow-700",
      users: "bg-green-500 text-green-700",
    },
    size: {
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
