import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/",
    newTab: false,
  },
  {
    id: 33,
    title: "Membership",
    path: "/",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact",
    path: "/",
    newTab: false,
  },
  {
    id: 4,
    title: "More",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Legacy of Surmandal",
        path: "/",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact Us",
        path: "/",
        newTab: false,
      },
      {
        id: 43,
        title: "Gallery",
        path: "/",
        newTab: false,
      },
      {
        id: 44,
        title: "Media coverage",
        path: "/",
        newTab: false,
      },
      {
        id: 45,
        title: "Musicians about Surmandal",
        path: "/",
        newTab: false,
      },
    ],
  },
];
export default menuData;
