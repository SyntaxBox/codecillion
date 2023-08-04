import { Metadata } from "next";
export const themeColorMetadata: Metadata = {
  themeColor: [
    {
      color: "#fff",
      media: "(prefers-color-scheme: light)",
    },
    {
      color: "#0f172a",
      media: "(prefers-color-scheme: dark)",
    },
  ],
};
