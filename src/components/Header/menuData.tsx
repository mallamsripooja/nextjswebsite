import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 2,
    title: "Membership",
    path: "/membership",
    newTab: false,
  },
  {
    id: 33,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 3,
    title: "Gallery",
    path: "/gallery",
    newTab: false,
  },
  {
    id: 4,
    title: "More",
    newTab: false,
    submenu: [
      {
        id: 44,
        title: "Media coverage",
        path: "/media",
        newTab: false,
      },
      {
        id: 45,
        title: "Feedback",
        path: "/feedback",
        newTab: false,
      },
    ],
  },
];
export default menuData;
