import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import ContentRenderer from "../components/ContentRenderer";
import ProgressBar from "../components/ProgressBar";
import SideNav from "../components/SideNav";
import { colorState } from "../utils/atoms";
import {
  Collection as CollectionProps,
  getCollection,
  getCollections,
} from "../utils/collections";

function Collection({ content, color, author, description }: CollectionProps) {
  const setColor = useSetRecoilState(colorState);

  useEffect(() => setColor(color), []);

  return (
    <>
      <ProgressBar />
      <div className="xl:p-12 lg:p-10 p-8 justify-center min-h-screen flex">
        <div
          className={`container lg:mr-10 prose-${color} prose xs:prose-s break-words`}
        >
          <ContentRenderer content={content} />
          <div className="text-center text-gray-500 italic text-sm mt-1">
            {author}
          </div>
        </div>
        <aside className="xl:w-64 lg:w-52 lg:block hidden relative">
          <div className="xl:w-64 lg:w-52 lg:block hidden fixed">
            <SideNav content={content} description={description} />
          </div>
        </aside>
      </div>
    </>
  );
}

export function getStaticPaths(): GetStaticPathsResult {
  const collections = getCollections();
  const slugs = collections.map((collection) => collection.slug);

  return {
    paths: slugs,
    fallback: false,
  };
}

export function getStaticProps(
  ctx: GetStaticPropsContext
): GetStaticPropsResult<CollectionProps> {
  const { slug } = ctx.params as { slug: string };

  const collection = getCollection(slug);

  return {
    props: collection,
  };
}

export default Collection;
