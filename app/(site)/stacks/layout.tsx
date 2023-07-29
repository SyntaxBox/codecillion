import { stacksMetadata } from "@/data/meta/pages";
import { Metadata } from "next";

export const metadata: Metadata = { ...stacksMetadata };
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
