"use client";
import { useState, useEffect } from "react";

const useCookieConsent = () => {
  const [status, setStatus] = useState<"granted" | "denied">("denied");

  const setCookieConsent = (value: "granted" | "denied") => {
    setStatus(value);
    localStorage.setItem("cookieConsent", JSON.stringify(value));
  };

  useEffect(() => {
    const initStatus = () => {
      const storedValue = localStorage.getItem("cookieConsent");
      setStatus(storedValue ? JSON.parse(storedValue) : "denied");
    };

    initStatus();
  }, []);

  return [status, setCookieConsent] as [
    "granted" | "denied",
    (value: "granted" | "denied") => void
  ];
};

export default useCookieConsent;
