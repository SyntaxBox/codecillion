import React from "react";
import Header from "@/app/components/Header/Header";
import Posts from "@/app/components/Posts/Posts";
import BigCard from "@/app/components/BigCard/BigCard";
import { getAllPosts } from "@/sanity/utils";
import { Metadata } from "next";
import { postsMetadata } from "@/data/meta/pages";
import LoadMore from "@/app/components/LoadMore/LoadMore";

export const metadata: Metadata = {
  ...postsMetadata,
};

export default async function Page() {
  const posts = await getAllPosts({});
  return (
    <main className="flex items-center justify-center mx-auto gap-6 flex-col max-w-[520px] md:max-w-[820px] lg:max-w-[1024px]">
      <Header
        title="Posts"
        description="Stay informed and inspired with our insightful programming posts. Enhance your skills and explore the latest trends in coding."
        searchObjectsType="post"
        searchPlaceholder="Search posts and topics ..."
      />
      <BigCard
        slug={`/posts/${posts[0].slug}`}
        title={posts[0].title}
        description={posts[0].description}
        thumbnail={posts[0].thumbnail}
        reduced
      />
      <Posts posts={posts.splice(1, posts.length)} />
      <LoadMore
        buttonText="Load More"
        data={{ from: "posts", start: 10, step: 5 }}
      />
    </main>
  );
}
