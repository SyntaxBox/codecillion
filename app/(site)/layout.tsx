import Providers from "./Providers";
import "../globals.css";
import { Barlow } from "next/font/google";
import Footer from "../components/Footer/Footer";
import { Metadata, Viewport } from "next";
import { metadataBase, manifest, icons } from "@/data";
import CookiesConsent from "../components/CookiesConsent/CookiesConsent";
import GoogleAnalytics from "../components/GoogleAnalytics/GoogleAnalytics";

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

export const metadata:Metadata = {
  metadataBase,
  manifest,
  icons,
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
            <CookiesConsent />
            <GoogleAnalytics />
          </>
        </Providers>
      </body>
    </html>
  );
}
