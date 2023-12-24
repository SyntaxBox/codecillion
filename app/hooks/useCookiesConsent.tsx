"use client";
import { useState, useEffect } from "react";

const useCookieConsent = () => {
  const [status, setStatus] = useState<"granted" | "denied">("denied");

  const setCookieConsent = (value: "granted" | "denied") => {
    setStatus(value);
    localStorage.setItem("cookieConsent", value);
  };

  useEffect(() => {
    const initStatus = () => {
      const storedValue = localStorage.getItem("cookieConsent") as "granted" | "denied" | null;
      setStatus(storedValue ?? "denied");
    };

    initStatus();
  }, []);

  return [status, setCookieConsent] as [
    "granted" | "denied",
    (value: "granted" | "denied") => void
  ];
};

export default useCookieConsent;
