export interface ITopicCollectionPlain {
  title: string;
  description: string;
  author: string;
  date: string;
  color: "red" | "yellow" | "green" | "blue" | "indigo" | "pruple" | "pink";
  content: string;
}

export interface ITopicCollection {
  title: string;
  description: string;
  author: string;
  date: string;
  color: "red" | "yellow" | "green" | "blue" | "indigo" | "pruple" | "pink";
  content: {
    content: string;
    id: string;
    position: number;
  }[];
}
