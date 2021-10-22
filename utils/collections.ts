import * as fs from "fs";
import matter from "gray-matter";
import * as path from "path";

export type CollectionColor =
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";

const allColors: CollectionColor[] = [
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

export interface Collection {
  slug: string;
  title: string;
  author: string;
  description: string;
  date: string;
  color: CollectionColor;
  content: string;
  lang: string;
}

const collectionDirectory = path.join(process.cwd(), "collections");

/**
 * Get a collection by name
 * @param slug Slug of the collection
 * @returns The collection object
 */
export function getCollection(slug: string): Collection {
  const collectionPath = path.join(collectionDirectory, `${slug}.md`);
  const collectionFile = fs.readFileSync(collectionPath, "utf8");
  const { content, data } = matter(collectionFile);

  return {
    slug,
    title: data.title,
    author: data.author,
    description: data.description,
    date: new Date(data.date).toLocaleDateString(),
    content,
    color: allColors.includes(data?.color) ? data.color : "blue",
    lang: data.lang || "en",
  };
}

/**
 * Get all collections
 * @returns An array of collection objects
 */
export function getCollections(): Collection[] {
  const collections = fs.readdirSync(collectionDirectory);

  return collections.map((collection) => {
    const slug = collection.replace(".md", "");
    return getCollection(`/${slug}`);
  });
}
