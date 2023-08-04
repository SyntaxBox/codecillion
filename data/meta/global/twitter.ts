import { Metadata } from "next";
export const twitterMetadata = (
  title: string,
  description: string,
  images: string,
  site: string
): Metadata => {
  return {
    twitter: {
      title,
      description,
      images,
      card: "summary",
      site,
    },
  };
};
