import Providers from "./Providers";
import Navbar from "@/app/components/Navbar/Navbar";
import "../globals.css";
import { Ubuntu } from "next/font/google";
import Footer from "../components/Footer/Footer";

const font = Ubuntu({
  weight: ["400", "700"],
  subsets: ["latin"],
});

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
            <header className="sticky top-0 left-0 z-50">
              <Navbar />
            </header>
            {children}
            <Footer className="mt-5" />
          </>
        </Providers>
      </body>
    </html>
  );
}
