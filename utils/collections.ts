import * as fs from "fs";
import matter from "gray-matter";
import * as path from "path";

export interface Collection {
  slug: string;
  title: string;
  author: string;
  description: string;
  date: string;
  color: "red" | "yellow" | "green" | "blue" | "indigo" | "pruple" | "pink";
  content: string;
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
    color: data.color || "blue",
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
