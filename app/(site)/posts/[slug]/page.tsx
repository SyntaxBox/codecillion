import { notFound } from "next/navigation";
import dynamicMetadata from "@/logic/dynamicMetadata";
import { getPostBySlug, getPostMetadataBySlug } from "@/sanity/utils";
import { Metadata } from "next";
import React from "react";
import PostHeader from "@/app/components/PostHeader/PostHeader";
import PostContent from "@/app/components/PostContent/PostContent";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { slug } = params;

  // fetch data
  const postMetadata = await getPostMetadataBySlug(slug);
  if (postMetadata) {
    return dynamicMetadata(postMetadata);
  } else {
    return {
      title: "Not Found",
    };
  }
}

async function page({ params }: Props) {
  const { slug } = params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();
  const { title, content, description, thumbnail } = post;
  return (
    <main className="flex flex-col items-center justify-center gap-6 max-w-3xl mx-auto px-4">
      <PostHeader
        description={description}
        thumbnail={thumbnail}
        title={title}
      />
      <PostContent content={content} />
    </main>
  );
}

export default page;
