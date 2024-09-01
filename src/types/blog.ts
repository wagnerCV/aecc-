
  type Author = {
  name: string;
  image: string;
  designation: string;
};


{/* 
  export type Blog = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
};

  */}
  
export type Blog = {
  id: number;
  title: string;
  paragraph: string;
  author: Author;
  image: string;
  tags: string[];
  publishDate: string;
};
