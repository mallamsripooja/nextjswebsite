type Author = {
  name: string;
};

export type Blog = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  link: string;
  author: Author;
  tags: string[];
  publishDate: string;
};
