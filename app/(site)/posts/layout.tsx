import Navbar from "@/app/components/Navbar/Navbar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="sticky top-0 left-0 z-50">
        <Navbar />
      </header>
      {children}
    </>
  );
}
