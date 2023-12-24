"use client";
import useCookieConsent from "@/app/hooks/useCookiesConsent";
import React, { useState } from "react";

function CookiesConsent() {
  const [show, setShow] = useState(true);
  const [status, setCookieConsent] = useCookieConsent();
  if (status === "granted" || !show) return null;
  return (
    <div className="max-w-screen-lg mx-auto fixed backdrop-blur-md bg-[#ffffff8b] dark:bg-[#0f172a8b] inset-x-5 p-5 bottom-4 rounded-lg drop-shadow-2xl flex gap-4 flex-wrap md:flex-nowrap items-center justify-center md:justify-between">
      <p className="w-full text-lg">
        This website uses cookies to make sure you have the best time while
        using it.
      </p>
      <div className="flex gap-4 items-center w-full md:w-fit">
        <button
          onClick={() => {
            setCookieConsent("denied");
            setShow(false);
          }}
          className="text-primary-600 dark:text-primary-alt-500 focus:outline-none hover:underline w-full border px-5 py-2 rounded-md border-primary-500 dark:border-primary-alt-500"
        >
          Decline
        </button>
        <button
          onClick={() => {
            setCookieConsent("granted");
            setShow(false);
          }}
          className="bg-primary-500 dark:bg-primary-alt-600 px-5 py-2 text-white rounded-md hover:bg-primary-700  dark:hover:bg-primary-alt-700 whitespace-nowrap focus:outline-none w-full"
        >
          Allow Cookies
        </button>
      </div>
    </div>
  );
}

export default CookiesConsent;
