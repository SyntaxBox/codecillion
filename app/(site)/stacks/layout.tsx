import { stacksMetadata } from "@/data";
import { Metadata } from "next";

export const metadata: Metadata = { ...stacksMetadata };
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
