import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import React from "react";

import ContentRenderer from "../components/ContentRenderer";
import SideNav from "../components/SideNav";
import {
  Collection as CollectionProps,
  getCollection,
  getCollections,
} from "../utils/collections";

function Collection({ content, ...collection }: CollectionProps) {
  return (
    <div className="xl:p-12 lg:p-10 p-8 justify-center min-h-screen flex">
      <div className="prose container lg:mr-10 break-words">
        <ContentRenderer content={content} />
      </div>
      <aside className="xl:w-64 lg:w-52 lg:block hidden relative">
        <div className="xl:w-64 lg:w-52 lg:block hidden fixed">
          <SideNav {...{ content, ...collection }} />
        </div>
      </aside>
    </div>
  );
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const collections = getCollections();
  const slugs = collections.map((collection) => collection.slug);

  return {
    paths: slugs,
    fallback: false,
  };
}

export async function getStaticProps(
  ctx: GetStaticPropsContext
): Promise<GetStaticPropsResult<CollectionProps>> {
  const { slug } = ctx.params as { slug: string };

  const collection = getCollection(slug);

  return {
    props: collection,
  };
}

export default Collection;
