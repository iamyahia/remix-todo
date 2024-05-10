import {
  User,
  Monitor,
  Archive,
  Setting3,
  DollarCircle,
  DocumentText,
} from "iconsax-react";

const sidebarItems = [
  {
    title: "Dashboard",
    icon: Monitor,
    to: "/dashboard",
  },
  {
    title: "Course",
    icon: Archive,
    to: "/course",
  },
  {
    title: "Students",
    icon: User,
    to: "/students",
  },
  {
    title: "Payment",
    icon: DollarCircle,
    to: "/payment",
  },
  {
    title: "Report",
    icon: DocumentText,
    to: "/#",
  },
  {
    title: "Setting",
    icon: Setting3,
    to: "/setting",
  },
];
export { sidebarItems };
