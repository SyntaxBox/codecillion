import { courseMetadata } from "@/data/meta/pages";
import { Metadata } from "next";

export const metadata: Metadata = { ...courseMetadata };
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
