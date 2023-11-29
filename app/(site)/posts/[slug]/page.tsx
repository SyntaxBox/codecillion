import { notFound } from "next/navigation";
import { getPostBySlug, getPostMetadataBySlug } from "@/sanity/utils";
import { Metadata } from "next";
import React from "react";
import PostHeader from "@/app/components/PostHeader/PostHeader";
import PostContent from "@/app/components/PostContent/PostContent";
import { URL, TWITTER } from "@/constants";
import {
  iconsMetadata,
  manifestMetadata,
  openGraphMetadata,
  themeColorMetadata,
  twitterMetadata,
  postMetadata as dynamicMetadata,
} from "@/data";

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
    const { title, description, thumbnail } = postMetadata;
    const metadata: Metadata = {
      ...dynamicMetadata(postMetadata),
      ...twitterMetadata(title, description, thumbnail, TWITTER),
      ...openGraphMetadata(title, description, thumbnail, `${URL}/${slug}`),
      ...themeColorMetadata,
      ...manifestMetadata,
      ...iconsMetadata,
    };
    return metadata;
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
    <>
      <PostHeader
        description={description}
        thumbnail={thumbnail}
        title={title}
      />
      <PostContent content={content} />
    </>
  );
}

export default page;
