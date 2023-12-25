// import { coursesPage } from "@/constants/keywords/pages";
import { THUMBNAIL, TWITTER, URL } from "@/constants/other";
import {} from "@/constants/other";
import { Metadata } from "next";
import { twitterMetadata, openGraphMetadata } from "../global";

export const metadata: Metadata = {
  robots: "noindex",
  title: "Coming Soon",
  description: "Coming Soon",
  ...twitterMetadata("Coming Soon", "Coming Soon", THUMBNAIL, TWITTER),
  ...openGraphMetadata(
    "Coming Soon",
    "Coming Soon",
    THUMBNAIL,
    `${URL}/projects`
  ),
};
