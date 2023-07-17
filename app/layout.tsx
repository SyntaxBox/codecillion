import Providers from "./Providers";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "codelighthouse",
  description:
    "Unlock your coding potential at Codelighthouse. Explore our programming courses, insightful posts, and curated stacks for a brighter programming journey.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-slate-900`}>
        <Providers>
          <>
            <header className="sticky top-0 left-0 z-50">
              <Navbar />
            </header>
            {children}
          </>
        </Providers>
      </body>
    </html>
  );
}
