import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
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
    id: 2,
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
  {
    id: 3,
    title: "Pandit Ravi Shankar’s legacy reverberates",
    paragraph:
      "Concert celebrating the legacy of Bharat Ratna Pt. Ravi Shankar ji.",
    image: "/images/blog/ravishankarjimemorial.jpg",
    link: "https://www.newindianexpress.com/cities/hyderabad/2024/Apr/13/pandit-ravi-shankars-legacy-reverberates",
    author: {
      name: "Vennapusala Ramya",
    },
    tags: ["The New Indian Express"],
    publishDate: "April 2024",
  },
];
export default blogData;
