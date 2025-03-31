import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Pandit Ronu Majumdar: Flute creates a feeling of serenity",
    paragraph:
      "Pt. Ronu Majumdar ji interviewed before Uttar-Dakshin concert in Hyd organized by Surmandal and Vivid Arts",
    image: "/images/blog/ronujiuttardakshin.jpg",
    link: "https://www.newindianexpress.com/cities/hyderabad/2025/Mar/20/pandit-ronu-majumdar-flute-creates-a-feeling-of-serenity",
    author: {
      name: "Nitika Krishna",
    },
    tags: ["The New Indian Express"],
    publishDate: "Mar 2025",
  },
  {
    id: 2,
    title: "Magical evening",
    paragraph:
      "Triveni season 2 featured in The New Indian Express",
    image: "/images/flagship/triveniseason2.jpg",
    link: "https://www.newindianexpress.com/cities/hyderabad/2025/Jan/14/magical-evening",
    author: {
      name: "Nitika Krishna",
    },
    tags: ["The New Indian Express"],
    publishDate: "Jan 2025",
  },
  {
    id: 3,
    title: "Hindustani Classical Recital by Ronkini Gupta in Hyderabad",
    paragraph:
      "",
    image: "/images/blog/ronkinijiconcert.jpg",
    link: "https://www.deccanchronicle.com/entertainment/music/hindustani-classical-recital-by-ronkini-gupta-in-hyderabad-898415",
    author: {
      name: "DC Correspondent",
    },
    tags: ["Deccan Chronicle"],
    publishDate: "June 2024",
  },
];
export default blogData;
