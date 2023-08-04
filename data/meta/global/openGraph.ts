import { Metadata } from "next";
export const openGraphMetadata = (
  title: string,
  description: string,
  images: string,
  url: string
): Metadata => {
  return {
    openGraph: {
      type: "website",
      title,
      description,
      images,
      url,
    },
  };
};
