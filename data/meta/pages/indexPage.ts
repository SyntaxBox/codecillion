import { homePage } from "@/constants/keywords/pages";
import { DESCRIPTION, TITLE, THUMBNAIL, URL } from "@/constants/other";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: homePage,
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
    images: [THUMBNAIL],
  },

  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    images: [THUMBNAIL],
    url: URL,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      "/icon-512x512.png",
      "/icon-384x384.png",
      "/icon-192x192.png",
      "/icon-128x128.png",
    ],
    apple: [
      "/icon-512x512.png",
      "/icon-384x384.png",
      "/icon-192x192.png",
      "/icon-128x128.png",
    ],
  },
};
