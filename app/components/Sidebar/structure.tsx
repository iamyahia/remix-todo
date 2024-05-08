import {
  User,
  Monitor,
  Archive,
  Setting3,
  DollarCircle,
  DocumentText,
} from "iconsax-react";

const sidebarStructure = [
  {
    id: "dashboard",
    title: "Home",
    name: "Home",
    parent: true,
    icon: "Home",
    link: "/dashboard",
  },
  {
    id: "mou",
    title: "MOU",
    name: "mou",
    parent: true,
    icon: "mou",
    link: "/dashboard/mou",
  },
];

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
    to: "/",
  },
  {
    title: "Setting",
    icon: Setting3,
    to: "/",
  },
];
export { sidebarStructure, sidebarItems };
