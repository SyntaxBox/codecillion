import Providers from "./Providers";
import "../globals.css";
import { Barlow } from "next/font/google";
import Footer from "../components/Footer/Footer";
import { Viewport } from "next";

const font = Barlow({
  weight: ["400", "700", "300"],
  subsets: ["latin"],
});

export const viewport: Viewport = {
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
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} dark:bg-slate-900`}>
        <Providers>
          <>
            {children}
            <Footer className="mt-5" />
          </>
        </Providers>
      </body>
    </html>
  );
}
